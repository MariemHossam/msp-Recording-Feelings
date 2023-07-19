
import './Record.css';
import {React, Fragment } from "react";
const Record=({list , deletefunction})=>{
    return(
    <>
    {list.map((R,idx) => (
        <div class='emoji' key={idx}>
            <img src={R.emoji} alt="emoji"/>
            <p>{R.text}</p>
            <button onClick={(e)=>deletefunction(e,idx)}>delete</button>
        </div>
    ))     
    }
    </>
    )
   
}

export default Record;