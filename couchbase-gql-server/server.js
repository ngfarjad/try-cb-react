require('dotenv').config()
const { CBSU, CBSP } = process.env

const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const couchbase = require('couchbase')
const uuid = require('uuid')
const cors = require('cors');

const app = express()
const cluster  = new couchbase.Cluster("couchbase://localhost")
      cluster.authenticate(CBSU, CBSP)

const bucket = cluster.openBucket("travel-sample")
      bucket.operationTimeout = 120 * 1000

const schema = buildSchema(`
  type Query {
    airlinesUK: [Airline],
    airlineByKey(id: Int!): Airline,
    airportsUK: [Airport]
  }
  type Airline {
    id: Int,
    callsign: String,
    country: String,
    iata: String,
    icao: String,
    name: String
  }
  type Airport {
    id: Int,
    name: String,
    country: String,
    icao: String,
    tz: String
  }
`)

const root = {
  airlinesUK: () => {
    let statement = 
      "SELECT META(airline).id, airline.* " +
      "FROM `travel-sample` AS airline " +
      "WHERE airline.type = 'airline' " +
      "AND airline.country = 'United Kingdom'" +
      "ORDER BY airline.name ASC"
    let query = couchbase.N1qlQuery.fromString(statement);
    return new Promise((resolve, reject) => 
      bucket.query(
        query, (error, result) => error ? reject(error) : resolve(result)
      )
    )
  },
  airlineByKey: (data) => {
    let dbkey = "airline_" + data.id
    return new Promise((resolve, reject) =>
      bucket.get(
        dbkey, (error, result) => error ? reject(error) : resolve(result.value)
      )
    )
  },
  airportsUK: () => {
    let statement = 
      "SELECT airport.id, airport.airportname as name, airport.country, airport.icao, airport.tz " +
      "FROM `travel-sample` AS airport " +
      "WHERE airport.type = 'airport' " +
      "AND airport.country = 'United Kingdom' " +
      "ORDER BY airport.airportname ASC"
    let query = couchbase.N1qlQuery.fromString(statement);
    return new Promise((resolve, reject) => 
      bucket.query(
        query, (error, result) => error ? reject(error) : resolve(result)
      )
    )
  },
}

const serverPort = 4000
const serverUrl = '/graphql'

app.use(cors())
app.use(serverUrl, graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(serverPort, () => {
  let message = `GraphQL server now running on http://localhost:${serverPort}${serverUrl}`
  console.log(message)
})

/*
  couchbase running on http://localhost:8091/
*/

/*

  query getAirlinesUK{
    airlinesUK {
      id
      name
      callsign
      country
      iata
      icao
    }
  }

*/

/*

  query getAirlineByKey($id: Int!) {
    airlineByKey(id:$id){
      id
      name
      callsign
      country
      iata
      icao
    }
  }

  {
    "id": 112
  }

*/

/*

  query getAirportsUK{
    airportsUK {
      id
      airportname
      country
      icao
      tz
    }
  }

*/