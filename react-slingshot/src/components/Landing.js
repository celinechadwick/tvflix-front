import React, {Component} from "react";
import { Link } from "react-router";


class Landing extends Component {
  constructor(props) {
    super(props);
    }
    render() {
            return (
                <div>
                    <div>
                      <Link to="/users/login">
                        Add Owner
                      </Link>
                    </div>

                </div>
            );
        }

}
    export default Landing;
