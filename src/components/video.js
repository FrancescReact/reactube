import React from "react";
import '../styles.css'


function getCss(imageurl) {
  const _styles = {
    backgroundImage: `url(${imageurl})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "180px",
    position: "relative"
  };
  return _styles;
}
const VideoItem = ({ data, onVideoSelected ,   handleSetVideoSnippetSelected}) => {

  function selectVideo(selectedVideoId) {
    onVideoSelected(selectedVideoId)
  }
  const obtain =
    data.videoMetadataInfo.map(({ snippet, id }, index) => {
      return (
        <div
          className="videoItem"
          key={index}
          onClick={(event) => {
            event.preventDefault();
            selectVideo(id.videoId)
            handleSetVideoSnippetSelected(snippet)   
          }}>
          <div style={getCss(snippet.thumbnails.medium.url)} key={index}></div>
          <p className="title">{snippet.title}</p>
        </div>
      )
    })
  return (
    <div>
      <h3>{obtain}</h3>
    </div>
  )
}
export default VideoItem;