import React, { Component } from "react";
import axios from "axios";

import Nav from "./Nav";
import OneShow from "./OneShow";

class AllShows extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: [],
            search: "",
            searchResult: null,
        }
    }


    componentDidMount() {
        let rando = Math.ceil(Math.random() * 3);

        axios
        .get(`http://api.tvmaze.com/shows?page=${rando}`)
        .then((response) => {
            this.setState({
                shows: response.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }


    handleSubmit(event) {
        event.preventDefault();
        let searchTerm = this.state.search;
        axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`)
        .then((response) => {
          console.log(response.data);
            this.setState({
                searchResult: response.data,
            });
          })
        .catch((err) => {
            console.log(err);
        });
    }

    handleChange(event) {
        console.log(event.target.name, event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }




    render() {
        return (
            <div>
                <Nav />
              <div className="container well small-container margin-top-20">
                <form onSubmit={this.handleSubmit.bind(this)}>
                   <div className="bold">
                       Search for a Show:
                   </div>
                   <div className="margin-top-10">
                       <input onChange={this.handleChange.bind(this)} name="search" type="text" className="form-control" />
                   </div>
                   <div className="margin-top-20 txt-center">
                       <button type="submit" className="btn btn-primary">Search! </button>
                   </div>
                </form>
              </div>

                {this.state.searchResult ? <OneShow key={this.state.searchResult.id} show={this.state.searchResult} /> : ""}

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
