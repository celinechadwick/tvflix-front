//This method should be used to delete a like
import React, { Component } from "react";
import axios from "axios";
import { browserHistory, Link } from "react-router";
import Like from './Like';


class Likes extends Component {
    constructor(props) {
        super(props);

        this.state = {
          likes: null
        };
    }

    // .then((response) => {
    //
    //   return axios.get(`http://api.tvmaze.com/lookup/shows?tvrage=${response.data}`); // using response.data
    // })

  componentDidMount() {
    console.log(this.props.userID);
      axios.get(`https://tvflix-back.herokuapp.com/users/${this.props.userID}/likes`, {
        headers: {
            "Authorization": window.localStorage.getItem("token")
          }
        })
        .then((response) => {
          const tvrageIDs = [];
          response.data.map(function(like) {
            return tvrageIDs.push(like.tvmaze_id);
          })
          this.setState({
            likes: tvrageIDs,
          });
        })
        .catch((err) => {
            console.log(err);
        });
    }


    render() {
        return (
          <div>

          { this.state.likes ? <Like data={this.state.likes} /> : "" }

          </div>
        );
    }
}

export default Likes;
