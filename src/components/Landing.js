import React, {Component} from "react";
import { Link } from "react-router";
import "../assets/css/style.css";


class Landing extends Component {

  constructor(props) {
    super(props);
    }
    render() {
            return (
                <div id="landing-title-only-here">
                    <Link to="/users/login" id="log-in">Log In</Link>

                    <span id="title">
                      <span className="T">T</span>
                                  <span className="V">V</span>
                                  <span className="F">F</span>
                                  <span className="L">L</span>
                                  <span className="I">I</span>
                                  <span className="X">X</span>
                    </span>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <h1>Totally not stealing from Netflix</h1>
                    <h3>Yep. Totally not.</h3>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                </div>
            );
        }

}

    export default Landing;
