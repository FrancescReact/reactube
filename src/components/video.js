import React from "react";
import '../styles.css'
import { useState } from 'react'
import VideoInfo from "./videoInfo";


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

const VideoItem = ({ data, onVideoSelected }) => {

  function selectVideo(selectedVideoId) {
    onVideoSelected(selectedVideoId)
  }
  const [info, setInfo] = useState('')
  const [titol, setTitol] = useState('')
  const [publi, setPubli] = useState('')
 
 
  const obtain =
    data.videoMetadataInfo.map(({ snippet, id }, index) => {
      return (
        <div
          className="videoItem"
          key={index}
          onClick={(event) => {
            event.preventDefault();
            selectVideo(id.videoId)
            setInfo(snippet.description)
            setTitol(snippet.title)
            setPubli(snippet.publishedAt)
          }}>
          <div style={getCss(snippet.thumbnails.medium.url)} key={index}></div>
          <p className="title">{snippet.title}</p>
        </div>
      )
    })
  return (
    <div>
      <h3>{obtain}</h3>
      <div ><VideoInfo  titol={titol} desc={info} publi={publi} /></div>
    </div>
  )
}
export default VideoItem;