import Nav from "./Nav";
import React, { Component } from "react";
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
              {this.props.data.first_name} {this.props.data.last_name}
              <br />
              {this.props.data.created_at}


            </div>
        );
    }
}

export default Profile;
