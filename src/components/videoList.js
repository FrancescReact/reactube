import React from 'react'
import '../styles.css'
import VideoItem from './video'

function VideoList({ data, onVideoSelected,   handleSetVideoSnippetSelected} ) {
  
  return (
    <div className="aside-1">
    <div className="video-list">
      <VideoItem data={data} onVideoSelected={onVideoSelected}   handleSetVideoSnippetSelected={handleSetVideoSnippetSelected} />
    </div>
    </div>
  );
};

export default VideoList;