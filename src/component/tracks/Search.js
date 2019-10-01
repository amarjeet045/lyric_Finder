import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";
class Search extends Component {
  

    state = {
      trackTitle: ""
    };
  
  handleChanges = (e)=>{
      this.setState({[e.target.name]:e.target.value})
  }
  formSubmit = (e)=>{
      e.preventDefault();
      axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`     
        )
        .then(res =>{console.log(res.data);
            
        })
        .catch(err => console.log(err))

  }
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fa fa-music" aria-hidden="true"></i> Search For A
                Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.formSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="search here"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.handleChanges}
                  ></input>
                </div>
                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get the Lyrics</button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Search;
