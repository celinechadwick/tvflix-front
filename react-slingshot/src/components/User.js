import React, { Component } from "react";
import axios from "axios";
import { browserHistory, Link } from "react-router";

import Profile from "./Profile";
import Like from "./Like";

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: []
        }
    }

//Get data on user likes from the axios requests
    componentDidMount() {
        axios
        .get(``)
        .then((response) => {
            const LikeData = response.data;

            this.setState({
                likes: LikeData
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

//This method should be used to delete a like
    destroyLike(index, id, event) {
        event.preventDefault();

        axios
        .delete(``)
        .then(() => {
            this.state.likes.splice(index, 1);

            this.setState({
                likes: this.state.likes
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
                <Profile />
                { this.state.likes.map((like, index) => {
                    return (
                        <Like
                        key={like.id}
                        owner={like}
                        destroyLike={this.destroyLike.bind(this, index, like.id)}
                        />
                    );
                }) }


            </div>
        );
    }
}

export default User;
