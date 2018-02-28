import React, {Component} from 'react';

class VideoListItem extends Component{
    constructor(props){
        super(props);
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }

    onVideoSelect(){
        this.props.onVideoSelect(this.props.video);
    }

    render(){
        return(
        <li className="video-list__items" onClick={this.onVideoSelect}>
            <div className="video-list__item">
                <img className="video-list__img" src={this.props.video.snippet.thumbnails.high.url} />
            </div>
            <div className="video-list__snippet">
                <p> {this.props.video.snippet.title} </p>
            </div>
        </li> 
        );
    }
}

export default VideoListItem;