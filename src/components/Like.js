//This method should be used to delete a like
    import React, { Component } from "react";
    import axios from "axios";
    import { browserHistory, Link } from "react-router";

    class Like extends Component {
        constructor(props) {
            super(props);
            this.state = {
              show: []
            }
            }
        }

    //Get data on user likes from the axios requests
        componentDidMount() {
            axios
            .get(``)
            .then((response) => {
                const ShowData = response.data;

                this.setState({
                    show: ShowData
                });
            })
            .catch((err) => {
                console.log(err);
            });
        }


//The delete needs to be tested, and I am not sure if the rendering is pointing to the right data.
        render() {
          { this.state.shows.map((show) => {
            return (
              <div>
              <div className="col-sm-3">
                  <img src={this.props.show.image.medium} className="img-responsive" />
              </div>
              <div className="col-sm-6">
                  <div>
                      <strong>{this.props.show.name}</strong>
                  </div>
                  <div className="margin-top-10">
                      Genres: {this.props.show.genres}
                  </div>
                  <div>
                      Summary: {this.props.show.summary}
                  </div>
              </div>
              <div className="col-sm-3 txt-right">

                <button onClick={this.props.destroyLike} className="btn btn-danger margin-left-5">
                <i className="fa fa-remove"></i>
                </button>

              </div>

              </div>
            );
        }
    }
