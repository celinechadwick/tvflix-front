 import React, { Component } from "react";
import { Link } from "react-router";

class OneShow extends Component {
    constructor(props) {
        super(props);
    }
    // saveShow (show, event) {
    //     event.preventDefault();
    //
    //     window
    //     .sessionStorage
    //     .setItem("owner_name", `${owner.first_name} ${owner.last_name}`);
    //
    //     browserHistory.push(`/owners/${owner.id}/pets/new`);
    // }

    // TO DO: Add show to the user profile using a button

    render() {
        return (
            <div className="row margin-top-20">
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
                    <Link to={  } className="btn btn-info margin-left-5">
                        <i className="btn btn-primary btn-sm"></i>
                    </Link>

                </div>
            </div>
        );
    }
}

export default Pet;
