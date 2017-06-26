import Nav from "./Nav";
import User from "./User"
import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
          user:[],
        }
    }


componentDidMount() {
        axios
        .get(`https://tvflix-back.herokuapp.com/shows/${this.props.params.user.id}`)
        .then((response) => {

            this.setState({
                user: response.data
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
                <User />

            </div>
        );
    }
}

export default Profile;
