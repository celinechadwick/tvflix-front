import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory, Link } from 'react-router';
import Nav from './Nav';

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




    render() {
        return (
          <div>
              <Nav />
              <div>
              <div className='container well small-container margin-top-20'>
              <div className='row'>
                  <div className='col-sm-8'>
                      <div className='md-font'>
                          {this.state.user.first_name} {this.state.user.last_name}
                      </div>
                      <div>
                          {this.state.user.email}
                      </div>
                      <div>
                          {this.state.user.created_at}
                      </div>
                  </div>

                  </div>
              </div>
          </div>
      </div>
        );
    }
}

export default User;
