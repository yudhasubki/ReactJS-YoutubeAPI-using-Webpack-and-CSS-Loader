import React,{Component} from 'react';
import axios from 'axios';
import VideoPopular from '../components/video_popular';

const API_KEY = 'AIzaSyC6-VrLMlQOJKHEGMnMi356xBkRuOUjk0U';
const params = {
    'chart': 'mostPopular',
    'regionCode': 'ID',
    'part': 'snippet,contentDetails,statistics',
    'videoCategoryId': '',
    'key':API_KEY,
};

class Popular extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos:[],
        };

        axios.get('https://www.googleapis.com/youtube/v3/videos', {params:params})
        .then(res => {
            const videos = res.data.items;
            this.setState({videos});
        }).catch(error => {
            console.log(error);;
        });
    }

    render(){
        return(
            <div>
                <VideoPopular videos={this.state.videos}/>
            </div>
        );
    }
}

export default Popular;