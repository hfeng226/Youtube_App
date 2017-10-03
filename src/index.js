//import react library
import React, {Component} from 'react';
//import react dom is a library to render
import ReactDOM from 'react-dom';
//import youtube search
import YTSearch from 'youtube-api-search';
//loading speed
import _ from 'lodash';

import SearchBar from './components/search_bar';
//Youtube API KEY
import VideoList from './components/video_list';
//import VideoDetail 
import VideoDetail from './components/video_detail';
//import VideoListItem
import VideoListItem from './components/video_list_item';


const API_KEY = 'USE YOUR OWN YOUTUBE API KEY';

// Create a new component. This should produce
// some HTML

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('TedTalk');
		
	}

	videoSearch(term){
		YTSearch({key:API_KEY, term: term}, (videos)=> {
		console.log(videos);
		//this.setState({videos: videos});
		//same as 
		this.setState({
			videos: videos,
			selectedVideo: videos[0]
			});
		});
	}
	
render(){
	const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

	return (
	//JSX-<div>Hi!</div> gets turn into HTML which loads onto the page 

	<div>
		<SearchBar onSearchTermChange={videoSearch} />
		
		<VideoDetail video={this.state.selectedVideo}/>

		<VideoList 
		onVideoSelect={selectedVideo => this.setState({selectedVideo})}
		videos={this.state.videos}/>	
	</div>
	);
	}
}


// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));