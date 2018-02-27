import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import NavigationBar from './components/Header/navbar';
import YTSearch from 'youtube-api-search';
import css from './styles/style.css';
const API_KEY = 'AIzaSyC6-VrLMlQOJKHEGMnMi356xBkRuOUjk0U';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            videoSelected:null,
        };  
        this.videoSearch = this.videoSearch.bind(this);

        YTSearch({key:API_KEY,term:this.state.query}, (videos)=>{
            this.setState({
                videos:videos,
                videoSelected:videos[0],
            });
        });
    }

    videoSearch(query){
        YTSearch({key:API_KEY,term:query}, (videos)=>{
            this.setState({
                videos:videos,
                videoSelected:videos[0],
            });
        });
    }

    render(){
        return(
            <div>
                <NavigationBar />
                <SearchBar onSearchTerm={query => this.videoSearch(query)} />
                <div className="video">
                    <div className="video-left">
                        <VideoDetail video={this.state.videoSelected}/>
                    </div>
                    <div className="video-right">
                        <VideoList 
                        onVideoSelect={videoSelected => this.setState({videoSelected}) } 
                        videos={this.state.videos} />
                    </div>
                </div>
                
                
                
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('App'));