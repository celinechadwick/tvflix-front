import Nav from "./Nav";
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
        .get("")
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
                <div>
                <div className="container well small-container margin-top-20">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="md-font">
                            {this.state.user.first_name} {this.state.user.last_name}
                        </div>
                        <div>
                            {this.state.user.email}
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Profile;
