import React, {Component} from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>;
    }
    return(
        <div className="video-detail">
            <iframe width="100%" height="400px" src={`https://youtube.com/embed/${video.id.videoId}`}></iframe>
        </div>
    );
}

export default VideoDetail;