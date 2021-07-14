import React from "react";
import '../styles.css';


function VideoInfo ( props) {    
       if(!props.videoSnippetSelected){
         return(
           <div className="videoinfo">
           <p>No info</p>
           </div>
         )
       }
       else{
    
    return(
      <div className="videoinfo">
      <p>{props.videoSnippetSelected.title}</p>
      <p>{props.videoSnippetSelected.description}</p>
      <p>{props.videoSnippetSelected.publishedAt}</p>
        
      </div>    
     );
    }
}
export default VideoInfo
