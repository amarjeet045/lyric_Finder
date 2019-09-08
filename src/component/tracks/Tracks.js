import React, { Component } from 'react'
import {Consumer} from '../../Context';
import Spinner from '../layout/Spinner';
import Track from './Track';
import {Link} from 'react-router-dom';
 class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value =>{
                    const{track_list ,heading}=value
                   
                    if(track_list===undefined||track_list.length===0){
                        return <Spinner />
                    }
                    else{
                    return (
                        <>
                        <div className="text-center mb-4">
                            <h3>{heading}</h3>
                        </div>
                        <div className="row">
                            {track_list.map(item=>(
                                <Track key={item.track.track_id} track={item.track}/>
                            ))}
                        </div>

                        </>
                    )
                    }
                }}
            </Consumer>
        )
    }
}

export default Tracks;