import React, { Component } from "react";
import axios from "axios";
import { browserHistory } from "react-router";

import Nav from "./Nav";

class EditUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
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
            const user = response.data;
            response.data.password = "";
            this.setState(user);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
        .put(`https://tvflix-back.herokuapp.com/users/${this.props.params.id}`, {
            user: this.state
        }, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then(() => {
            browserHistory.push(`/users/${this.props.params.id}`);
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

    handleDeActivate(event) {

        axios.put(`https://tvflix-back.herokuapp.com/users/${this.props.params.id}`, {
          "user": {
              "is_active": false,
          }
        }, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then(() => {
          window.localStorage.removeItem("token");
          browserHistory.push('/users/login');
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <Nav />

                <h2 className="txt-center">Edit User</h2>

                <div className="container well small-container margin-top-20">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="bold">
                            First Name
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="first_name" type="text" className="form-control" value={this.state.first_name} />
                        </div>
                        <div className="bold margin-top-10">
                            Last Name
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="last_name" type="text" className="form-control" value={this.state.last_name} />
                        </div>
                        <div className="bold margin-top-10">
                            Email
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="email" type="email" className="form-control" value={this.state.email} />
                        </div>
                        <div className="bold margin-top-10">
                            Password
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.handleChange.bind(this)} name="password" type="password" className="form-control" value={this.state.password} />
                        </div>
                        <div className="margin-top-20 txt-center">
                            <button type="submit" className="btn btn-primary">Submit Changes</button>
                        </div>
                    </form>
                </div>
                <button onClick={this.handleDeActivate.bind(this)}> Deactivate Account (CANNOT BE UNDONE) </button>
            </div>
        );
    }
}

export default EditUser
