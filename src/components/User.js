import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory, Link } from 'react-router';
import Nav from './Nav';
import Like from './Like'

import Profile from './Profile';
// import Like from './Like';


class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }


    componentDidMount() {
        axios
        .get(`https://tvflix-back.herokuapp.com/users/${this.props.params.id}`, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then((response) => {
            this.setState({
                user: response.data,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    destroyLike(index, id, event) {
        event.preventDefault();

        axios
        .delete(``)
        .then(() => {

      browserHistory.push("/users/this.props.params.id");

      this.setState({
        like: this.state.like
      });

      })
        .catch((err) => {
            console.log(err);
        });
    }
    //I want to make sure I am not looping over ALL the components!!!
    render() {
      return (
        <div>
          <Nav />
          <Profile />

          { this.state.owners.map((like, index) => {
            return (
                <Like
                key={index}
                like={like}
                destroyLike={this.destroyLike.bind(this, index, user.id)}
                />
              );
              }) }


          </div>
        );
    }
}

export default User;
