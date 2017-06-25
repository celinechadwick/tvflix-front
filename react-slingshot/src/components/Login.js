import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
            userData:[]
            // Get info for user and store in this object
    };
  }


  handleSubmit(event) {
      event.preventDefault();
      axios.post("http://tvflix-back.herokuapp.com/users/login", {
          user: this.state
      })
        .then((response) => {
            const token = response.data.token;
            window.localStorage.setItem("token", token);
            browserHistory.push("/shows");
        })
        .catch((err) => {
            console.log(err);
        });
  }


    // HELP: WE NEED TO ADD VERIFICATION TO CHECK IF THE FORM DATA IS CORRECT. Maybe make this an IF statement to check.
    verifyForm(event) {
      console.log(event.target.value, event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
            return (
                <div>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="bold">
                            Email
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.verifyForm.bind(this)} name="email" type="email" className="form-control" />
                        </div>
                        <div className="bold margin-top-10">
                            Password
                        </div>
                        <div className="margin-top-10">
                            <input onChange={this.verifyForm.bind(this)} name="password" type="text" className="form-control" />
                        </div>

                        <div className="margin-top-20 txt-center">
                            <button type="submit" className="btn btn-primary">Submit </button>
                        </div>
                    </form>
                    <div>
                      <Link to="/Users/new">
                        Make An Account
                      </Link>
                    </div>

                </div>
            );
        }

}
    export default Login;
