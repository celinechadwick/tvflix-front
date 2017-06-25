import React, { Component } from "react";
import {Link} from "react-router";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
            userData:[]
            // Get info for user and store in this object
    }


    componentDidMount() {
      //This should be a call to our own database
        axios
        .get("")
        .then((response) => {
            const UserData = response.data;

            //Next up: Set state with user/:id from API
            this.setState({
                userData: userData
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleSubmit(event) {
      event.preventDefault();
        //Logic to compare form data to the database data goes here
  }



    // HELP: WE NEED TO ADD VERIFICATION TO CHECK IF THE FORM DATA IS CORRECT. Maybe make this an IF statement to check.
    verifyForm(event) {
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
