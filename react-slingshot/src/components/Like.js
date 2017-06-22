//This method should be used to delete a like
    import React, { Component } from "react";
    import axios from "axios";
    import { browserHistory, Link } from "react-router";

    class User extends Component {
        constructor(props) {
            super(props);

            this.state = {
                like: []
            }
        }

    //Get data on user likes from the axios requests
        componentDidMount() {
            axios
            .get(``)
            .then((response) => {
                const LikeData = response.data;

                this.setState({
                    like: LikeData
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
//The delete needs to be tested, and I am not sure if the rendering is pointing to the right data.
        render() {
            return (
              <div>
              <div className="row margin-top-20">
              <div className="col-sm-3">
                  <img src={} className="img-responsive" />
              </div>
              <div className="col-sm-6">
                  <div>
                      Title: <strong>{}</strong>
                  </div>
                  <div className="margin-top-10">
                      Description: {}
                  </div>
                  <div>
                      Category: {}
                  </div>
              </div>
                <button onClick={this.props.destroyLike} className="btn btn-danger margin-left-5">
                          <i className="fa fa-remove"></i>
                </button>
              </div>
            );
        }
    }
