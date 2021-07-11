import React from 'react'
import '../styles.css'
import VideoItem from './video'

function VideoList({ data, onVideoSelected} ) {
  
  return (
    <div className="aside-1">
    <div className="video-list">
      <VideoItem data={data} onVideoSelected={onVideoSelected} />
    </div>
    </div>
  );
};

export default VideoList;