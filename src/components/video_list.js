import React, {Component} from 'react';
import VideoListItem from './video_item';

const VideoList = (props) =>{
    const videoItem = props.videos.map((video)=>{
        return(
            <VideoListItem key={video.etag} onVideoSelect={props.onVideoSelect} video={video}/>
        );
    });

    return(
        <ul className="video-list">
            {videoItem}
        </ul>
    );
};

export default VideoList;