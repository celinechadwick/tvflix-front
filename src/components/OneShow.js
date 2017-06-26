 import React, { Component } from "react";
import { Link } from "react-router";

class OneShow extends Component {
    constructor(props) {
        super(props);
    }


    saveShow (show, event) {
        event.preventDefault();

        window
        .sessionStorage
        .setItem("tvmaze_id", `${this.props.show.externals.tvrage}`);

        axios
        .post(`https://tvflix-back.herokuapp.com/shows/${this.props.show.externals.tvrage}`, {
            headers: {
                "Authorization": window.localStorage.getItem("token")
            }
        })
        .then(() => {
            browserHistory.push(`/users/:id`);
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
                    <Link to="#" className="btn btn-info margin-left-5">
                        <i className="btn btn-primary btn-sm"></i>
                    </Link>

                </div>

                <a onClick={this.saveShow.bind(this, this.props.show.externals.tvrage)} href="#" className="btn btn-success">
                    <i className="fa fa-plus"></i>
                </a>

            </div>
        );
    }
}

export default OneShow;
