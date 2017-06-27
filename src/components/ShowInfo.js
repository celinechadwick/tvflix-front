import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";
import AllLikes from './AllLikes'
import Nav from './Nav'

class ShowInfo extends Component {
   constructor(props) {
       super(props);

       this.state = {
           show: {},
           imageStatus: 'loading',
       }
   }

   componentDidMount() {
    axios.get(`http://api.tvmaze.com/lookup/shows?tvrage=${this.props.params.tvmaze_id}`)
       .then((response) => {
           this.setState({
               show: response.data
           });
       })
       .catch((err) => {
           console.log(err);
       });
   }


   saveShow (show, event) {
       event.preventDefault();
       axios
       .post(`https://tvflix-back.herokuapp.com/shows/${this.props.params.tvmaze_id}/likes`, null, {
           headers: {
               "Authorization": window.localStorage.getItem("token")
           }
       })
       .then(() => {
           browserHistory.push(`/shows/${this.state.show.externals.tvrage}`);
       })
       .catch((err) => {
           console.log(err);
       });
   }


   render() {
       return (
           <div className="row margin-top-20">
              <Nav />

              <div className="container well small-container margin-top-20">
               <div className="col-sm-3">
                   <img src={this.state.show.image ? this.state.show.image.medium : "http://www.ebikes.ca/tripanalyzer/img/loading.jpg"} />

               </div>
               <div className="col-sm-6">
                   <div>
                       <strong>{this.state.show.name}</strong>
                   </div>
                   <div className="margin-top-10">
                       Genres: {this.state.show.genres}
                   </div>
                   <div>
                       Summary: <span dangerouslySetInnerHTML={{__html: this.state.show.summary}} />
                   </div>
                   <div>
                   <b>Liked By:</b><br/>
                   { this.state.show.externals ?
                     <AllLikes show={this.state.show.externals.tvrage } /> : ""}
                   </div>
               </div>
               <div className="col-sm-3 txt-right">

               { this.state.show.externals ? <Link onClick={this.saveShow.bind(this, this.state.show.externals.tvrage )} className="btn btn-danger">
                   <i className="glyphicon glyphicon-heart-empty"></i>
               </Link>
               : ""}

               </div>
               </div>
           </div>
       );
   }
}

export default ShowInfo;
