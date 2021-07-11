import React from "react";
import '../styles.css';


function VideoInfo ( props) {    
       if(!props){
         return(
           <div className="videoinfo">
           <p>No info</p>
           </div>
         )
       }
       else{
    
    return(
      <div className="videoinfo">
      <p>{props.titol}</p>
      <p>{props.desc}</p>
      <p>{props.publi}</p>
        
      </div>    
     );
    }
}
export default VideoInfo
