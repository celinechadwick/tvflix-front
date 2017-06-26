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


    //Get data on user likes from the axios requests
    ComponentDidMount() {
        axios
        .get(`https://tvflix-back.herokuapp.com/users/${this.props.params.id}`, {
          headers: {
              "Authorization": window.localStorage.getItem("token")
            }
          })
      .then((response) => {
        return axios.get(`http://api.tvmaze.com/lookup/shows?tvrage=${response.data}`); // using response.data
      })
      .then((response) => {
        this.setState({
            show: response.data,
        });
    })
    .catch((err) => {
        console.log(err);
    });
      };



//The delete needs to be tested, and I am not sure if the rendering is pointing to the right data.
        render() {
            return (
              <div>
              <div className="col-sm-3">
                  <img src={this.state.show.image.medium} className="img-responsive" />
              </div>
              <div className="col-sm-6">
                  <div>
                      <strong>{this.state.show.name}</strong>
                  </div>
                  <div className="margin-top-10">
                      Genres: {this.state.show.genres}
                  </div>
                  <div>
                      Summary: {this.state.show.summary}
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
