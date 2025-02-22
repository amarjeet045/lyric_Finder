import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Tracks from './Tracks';
import Moment from "react-moment";
class Lyrics extends Component {
    
     
     state={
        track:{},
        lyrics:{}
    }

     
    componentDidMount(){
        axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
        .then(res =>{
            //{console.log(res.data);
            this.setState({lyrics:res.data.message.body.lyrics});

            return axios.get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
                
            ).then(res=>{
                console.log(res.data)
                this.setState({track:res.data.message.body.track});
               
            })
        })
        .catch(err => console.log(err))
    }
    
    render() {
        const {track,lyrics}= this.state
        if(track === undefined ||
            lyrics === undefined ||
            Object.keys(track).length === 0 ||
            Object.keys(lyrics).length === 0)
        {
            return <Spinner />;
        }
        else{
           return( <>
            <Link to="/" className="btn btn-dark btn-sm mb-4">Go back</Link>
            <div className="card">
                <h5 className="card-header">
                {track.track_name} by{''} &nbsp;
                <span className='text-secondary'>{track.artist_name}</span>
                </h5>
            <div className = "card-body">
                <p>{lyrics.lyrics_body}</p>
            </div>

            </div>
            <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>
          
          <li className="list-group-item">
            <strong>Release Date</strong>:{" "}
            <Moment format="DD/MM/YYYY">
              {track.first_release_date}
            </Moment>
          </li>
        </ul>
            </>
           )
            
        }
      
        return (
            <div></div>
        )
    }
}
export default Lyrics;