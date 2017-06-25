mport React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";

import Nav from "./Nav";

class NewUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
        .post("", {
            user: this.state
        })
        .then(() => {
            //Yay! New owner created
            browserHistory.push("users/login");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Nav />
                
                <h2 className="txt-center">Create An Account</h2>

                <div className="container well small-container margin-top-20">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="bold">
                            First Name
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="first_name" type="text" className="form-control" />
                        </div>
                        <div className="bold margin-top-10">
                            Last Name
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="last_name" type="text" className="form-control" />
                        </div>
                        <div className="bold margin-top-10">
                            Email
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="email" type="email" className="form-control" />
                        </div>

                        <div className="margin-top-20 txt-center">
                            <button type="submit" className="btn btn-primary">Submit Owner</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewOwner;
