import React, { Component } from "react";
import axios from "axios";

import Nav from "./Nav";
import OneShow from "./OneShow";

class AllShows extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: []
        }
    }


    componentDidMount() {
      //TO DO: Would be best to get a random number for the page param. Would give you a new page every time!
        axios
        .get(`http://api.tvmaze.com/shows?page=1`)
        .then((response) => {
            this.setState({
                shows: response.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }


    render() {
        return (
            <div>
                <Nav />

                { this.state.shows.map((show) => {
                    return (
                        <OneShow key={show.id} show={show} />
                    );
                }) }
            </div>
        );
    }
}

export default AllShows;
