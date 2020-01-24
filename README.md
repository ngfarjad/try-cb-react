# React, Apollo, GraphQL, and Express Project

In this repo we have two separate projects:

## api-server

- An Express Server with Couchbase Server for data storage

## react-client

- A React app which uses the Express server

## Setup Couchbase Server and Data Bucket Locally

run:  
`docker run -d --name couchbase-sandbox -p 8091-8094:8091-8094 -p 11210:11210 -v $(pwd)/couchbase_demo:/opt/couchbase/var couchbase/server-sandbox:6.5.0`

## Running the Applications

In root directory run:
`npm start`  

## `.env`

```
user=Administrator
pass=123456
```