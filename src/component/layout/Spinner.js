import React from 'react'
import loader from '../../loader.gif'
export default function Spinner() {
    return (
        <div>
           <img src ={loader} alt="loading ..."
           style={{width:"200px",height:"200px",margin:"40px auto",display:"block"}} />
        </div>
    )
}
