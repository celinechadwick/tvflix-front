import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from 'axios';

class OneShow extends Component {
    constructor(props) {
        super(props);
    }


    saveShow (show, event) {
        event.preventDefault();
        axios
        .post(`https://tvflix-back.herokuapp.com/shows/${this.props.show.externals.tvrage}/likes`, null, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then(() => {
            browserHistory.push(`/shows/${this.props.show.externals.tvrage}`);
        })
        .catch((err) => {
            console.log(err);
        });
    }


    // TO DO: Add show to the user profile using a button

    render() {
        return (
            <div className="row margin-top-20">
              <Link to={`/shows/${this.props.show.externals.tvrage}`}>
                <div className="col-sm-3">
                    <img src={this.props.show.image.medium} className="img-responsive" />
                </div>
              </Link>
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
                <Link onClick={this.saveShow.bind(this, this.props.show.externals.tvrage)} className="btn btn-danger">
                    <i className="glyphicon glyphicon-heart-empty"></i>
                </Link>

                </div>



            </div>
        );
    }
}

export default OneShow;
