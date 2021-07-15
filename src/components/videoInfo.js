import React from "react";
import '../styles.css';


function VideoInfo ( props) {    
       if(!props.videoSnippetSelected){
         return(
           <div>
           
           </div>
         )
       }
       else{
    
    return(
      <div className="videoinfo">
      <p>Title-{props.videoSnippetSelected.title}</p>
      <p>Description-{props.videoSnippetSelected.description}</p>
      <p>Published at-{props.videoSnippetSelected.publishedAt}</p>
        
      </div>    
     );
    }
}
export default VideoInfo
