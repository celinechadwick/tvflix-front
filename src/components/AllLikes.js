import React, { Component } from "react";
import { browserHistory, Link } from "react-router";
import axios from "axios";


class AllLikes extends Component {
   constructor(props) {
       super(props);

       this.state = {
           likes: []
       }

   }

   componentDidMount() {
    axios.get(`https://tvflix-back.herokuapp.com/shows/${this.props.show}/likes/`)
       .then((response) => {
         console.log(response.data);
           this.setState({
               likes: response.data
           });
       })
       .catch((err) => {
           console.log(err);
       });
   }



   render() {
       return (
           <div>

             { this.state.likes.map((like) => {
                 return (
                   <div key={like.id}>
                    {`${like.first_name} ${like.last_name} ${like.created_at}`}
                   </div>
                 );
             }) }

           </div>
       );
   }
}

export default AllLikes;
