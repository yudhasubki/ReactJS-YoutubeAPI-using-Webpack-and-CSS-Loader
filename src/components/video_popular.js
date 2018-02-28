import React,{Component} from 'react';
import VideoPopularList from './video_popularlist';

class VideoPopular extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="video-popular">
                <VideoPopularList videoPopular={this.props.videos} />
            </div>
        );
    }
}

export default VideoPopular;