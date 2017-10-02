import React, {Component} from 'react';

//input search bar
// BELOW IS AN EXAMPLE OF AN FUNCTIONAL COMPONENT
// const SearchBar = () => {
// 	return <input />;
// };

//BELOW IS A CLASS COMPONENT
class SearchBar extends Component {
	//constructor = first and only function called automatically whenever a new instance of the class is created
	constructor(props){
		//super is called the parent class which is Component
		super(props);
		//state - creating a new object- 
		this.state ={term:''};
	}
	render() {
		//onChange is a property
		//EVENT HANDLER = onChange={this.onInputChange}
		//this.setState let react know that state is changing
	 return(
	 	<div className="search-bar">

	 	<input
	 		value={this.state.term} 
	 		onChange={event => this.onInputChange(event.target.value )}/>
	 	
	 	</div>
	 	);
	 	}

	 	onInputChange(term){
	 		this.setState({term});
	 		this.props.onSearchTermChange(term);
	 	}


	//EVENT HANDLER
	// onInputChange(event){
	// 	console.log(event.target.value);
	// }
}

export default SearchBar;