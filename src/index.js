//import react library
import React, {Component} from 'react';
//import react dom is a library to render
import ReactDOM from 'react-dom';
//import youtube search
import YTSearch from 'youtube-api-search';
//import the SearchBar
import SearchBar from './components/search_bar';
//Youtube API KEY
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAZCKra_Aq5p67T_1vHl8KMryqlIOS41tk';

// Create a new component. This should produce
// some HTML

class App extends Component {
	constructor(props){
		super(props);

		this.state = {videos: []};

		YTSearch({key:API_KEY, term: 'surfboards'}, (videos)=> {
		//console.log(videos);
		//this.setState({videos: videos});
		//same as 
		this.setState({videos});
		});
	}
	
render(){
	return (
	//JSX-<div>Hi!</div> gets turn into HTML which loads onto the page 	
	<div>
		<SearchBar />
		<VideoList videos={this.state.videos}/>	
	</div>
	);
	}
}


// Take this component's generated HTML and put it 
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));