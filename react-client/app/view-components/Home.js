import React, { useState } from "react";
import { Input } from '@progress/kendo-react-inputs'
import { AutoComplete } from '@progress/kendo-react-dropdowns';
import '@progress/kendo-react-intl'
import '@progress/kendo-drawing'


const Home = () => {
    document.title = `Welcome`;
    var searchForm = {};
    const [locationsTo, setLocationsTo] = useState([]);
    const [locationsFrom, setLocationsFrom] = useState([]);
    const [flights, setFlights] = useState([]);
    const error = [];

    function findFromLocation(event) {
        var searchText = event.target.value;
        var url = "/api/airports?search=" + searchText;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                var locations = data.data.map(function (item) {
                    return item['airportname'];
                });
                setLocationsFrom(locations);
            })
            .catch(console.log);
    }

    function findToLocation(event) {
        var searchText = event.target.value;
        var url = "/api/airports?search=" + searchText;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                var locations = data.data.map(function (item) {
                    return item['airportname'];
                });
                setLocationsTo(locations);
            })
            .catch(console.log);
    }

    function findFlight(event) {
        var to = searchForm.locationTo.value;
        var from = searchForm.locationFrom.value;
        var returns = searchForm.startDate.value;
        var url = "/api/flightPaths/" + to + "/" + from + "?leave=" + returns;

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setFlights(data);
            })
            .catch(console.log);
        event.preventDefault();
    }

    function onOpen() { console.log('open'); }
    function onClose() { console.log('close'); }
    function onFocus() { console.log('focus'); }
    function onBlur() { console.log('blur'); }

    return (
        <div className="view-home">
            <h1>Welcome</h1>
            <h2><strong>Find a Flight</strong></h2>
            <br />
            <form className="form-inline" onSubmit={findFlight}>
                <label className="col-sm-3 control-label">
                    AIRPORT OR CITY</label>
                <div className="input-group">

                    <span className="input-group-addon">From</span>
                    <AutoComplete
                        data={locationsFrom}
                        onOpen={onOpen}
                        onClose={onClose}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={findFromLocation}
                    />
                    <span className="input-group-addon ">To</span>
                    <AutoComplete
                        data={locationsTo}
                        onOpen={onOpen}
                        onClose={onClose}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={findToLocation}
                    />
                </div>
                <label className="col-sm-3 control-label">TRAVEL DATES</label>
                <div className="input-daterange">
                    <div className="input-group">
                        <span className="input-group-addon">Leave</span>
                        <Input type="text" id="startDate" ref={node => (searchForm.startDate = node)}
                            name="startDate" placeholder="travel date (mm/dd/YYYY)" onChange={findFlight}
                            className="form-control" />
                        <span className="input-group-addon" id="retSpan">Return</span>
                        <Input type="text" id="endDate" ref={node => (searchForm.endDate = node)}
                            name="endDate" placeholder="optional return date (mm/dd/YYYY)" onChange={findFlight}
                            className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Find Flights</button>
            </form>
        </div>
    );
};

export default Home;