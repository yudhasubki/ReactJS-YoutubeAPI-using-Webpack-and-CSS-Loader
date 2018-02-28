import React,{Component} from 'react';
const VideoPopularList = ({videoPopular}) =>{
    return(
        <ul className="video-popular__list">
            { 
                videoPopular.map(video => { 
                    return(
                        <li key={video.etag} className="video-popular__items">
                            <div className="video-popular__item">
                                <img className="video-popular__image" src={video.snippet.thumbnails.high.url} />
                            </div>
                            <div className="video-popular__snippet">
                                <p className="video-popular__title"> {video.snippet.title} </p>
                                <div className="video-popular__details">
                                    <p className="video-popular__channelTitle">{video.snippet.channelTitle}</p>
                                    <p className="video-popular__published">{video.snippet.publishedAt.substr(0,10)}</p>
                                </div>
                                <p className="video-popular__desc"> { video.snippet.description.substr(0,80) }</p>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default VideoPopularList;