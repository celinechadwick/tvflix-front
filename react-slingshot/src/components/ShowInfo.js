import React, { Component } from "react";
import { Link } from "react-router";
import axios from "axios";

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
                       Summary: {this.state.show.summary}
                   </div>
               </div>
               <div className="col-sm-3 txt-right">
                   <Link to="#" className="btn btn-info margin-left-5">
                       <i className="btn btn-primary btn-sm"></i>
                   </Link>

               </div>
           </div>
       );
   }
}

export default ShowInfo;
