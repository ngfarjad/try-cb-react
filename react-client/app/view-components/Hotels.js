import React, { useState } from "react";
import './Login.scss';

const Hotels = (props) => {
    document.title = `Hotels`;
    var searchForm = {};
    const [hotels, setHotels] = useState([]);
    const error = [];

    function findHotels(event) {
        var url = "/api/hotel/";
        var description = searchForm.description.value;
        var location = searchForm.location.value;
        var hasDescription = (description != null && description != "");
        var hasLocation = (location != null && location != "");
        if (hasDescription && hasLocation) {
            url = url + description + "/" + location + "/";
        } else if (hasLocation) {
            url = url + "*/" + location + "/";
        } else if (hasDescription) {
            url = url + description + "/"
        }
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setHotels(data);
            })
            .catch(console.log);
        event.preventDefault();
    }

    return (
        <>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Find Hotels</h3>
                </div>
                <div className="panel-body">
                    <form className="form-inline" onSubmit={findHotels}>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" id="descriptionInput" ref={node => (searchForm.description = node)} name="descriptionInput" placeholder="optional keyword" onChange={findHotels} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <input type="text" id="locationInput" placeholder="eg. 'London', 'France'..." ref={node => (searchForm.location = node)} onChange={findHotels} className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-sm">Find Hotels</button>
                    </form>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Matching Hotels</h3>
                </div>
                <div className="panel-body">
                    {hotels && hotels.length == 0 &&
                        <div >No matching Hotels</div>
                    }
                    {
                        hotels && hotels.length > 0 &&
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th> Name </th>
                                    <th> Address </th>
                                    <th> Description </th>
                                </tr>
                            </thead>
                            <tbody>
                            {hotels.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td>{listValue.name}</td>
              <td>{listValue.address.suite} {listValue.address.city}</td>
              <td>{listValue.email}</td>
            </tr>
          );})}
                                <tr>
                                    <td className="header">
                                        item
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            
                            </tbody>
                        </table>
                    }
                </div>
                <div className="panel-footer">
                    <span>
                        {hotels.length} matching hotels.</span>
                </div>
            </div>
            {error && error.length > 0 &&
                <div className="has-error" >
                    <div className="help-block">There was an error (<a data-toggle="collapse" data-target="#errorDetail">click for details</a>)</div>
                    <div id="errorDetail" className="collapse"></div>
                </div>
            }

        </>
    );
};

export default Hotels;