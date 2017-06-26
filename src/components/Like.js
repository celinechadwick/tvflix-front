//This method should be used to delete a like
import React, { Component } from "react";
import axios from "axios";
import { browserHistory, Link } from "react-router";
import OneShow from './OneShow'

export default class Like extends Component {
    constructor(props) {
        super(props);

        this.state = {
          likedShows: null
        }
      }


//Get data on user likes from the axios requests
componentDidMount() {
  let allShowData = [];

  this.props.data.forEach((like) => {
    axios.get(`http://api.tvmaze.com/lookup/shows?tvrage=${like}`)
      .then((response) => {
        allShowData.push(response.data)
      })
      .catch((err) => {
          console.log(err);
      });
  }
);
  this.setState({
      likedShows: allShowData,
  });

}




//The delete needs to be tested, and I am not sure if the rendering is pointing to the right data.
    render() {
        return (
          <div>




          { this.state.likedShows ? this.state.likedShows.map((show) => {
              return (
                <OneShow key={show.id} show={show} />
              );
          }) : "" }

          </div>
        );
    }
}
