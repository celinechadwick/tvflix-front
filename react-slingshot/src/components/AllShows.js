import React, { Component } from "react";
import axios from "axios";

import Nav from "./Nav";
import OneShow from "./OneShow";

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: []
        }
    }


    componentDidMount() {
        axios
        //Would be best to get a random number for the page param. Would give you a new page every time!
        .get(`http://api.tvmaze.com/shows?page=1`)
        .then((response) => {
            const showData = response.data;

            //Next up: Set state with owners from API
            this.setState({
                shows: ShowData
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

                { this.state.shows.map((show, index) => {
                    return (
                        <OneShow
                        key={index}
                        show={show}
                        />
                    );
                }) }
            </div>
        );
    }
}

export default AllShows;
