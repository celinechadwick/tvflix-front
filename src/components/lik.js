//This method should be used to delete a like
import React, { Component } from "react";
import axios from "axios";
import { browserHistory, Link } from "react-router";
import OneShow from './OneShow';

export default class Lik extends Component {
    constructor(props) {
        super(props);

      }




//The delete needs to be tested, and I am not sure if the rendering is pointing to the right data.
    render() {
        return (
          <div>

          { this.props.likedShows.map((show) => {
              return (
                <OneShow key={show.id} show={show} />
              );
          }) }

          </div>
        );
    }
}
