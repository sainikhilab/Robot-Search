import React, {Component} from 'react';
import Cardlist from './Cardlist.js';
import Search from './Search.js';
//import {robots} from './robots.js';
import './App.css';
import Scroll from './Scroll.js';


class App extends Component{

constructor(){
	super()
	this.state={
		robots:[],
		searchfield: ''
	}
}

componentWillMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(users=>{this.setState({robots:users})});
}

onSearchChange = (event) => {
	this.setState({searchfield: event.target.value})
}

render(){
	const filterRobots = this.state.robots.filter(robot =>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	if(this.state.robots.length===0)
	{
		return<h1>LOADING</h1>
	}
	else{
		return(
			<div className='tc'>
				<h1 className= 'f2'> MY ROBO FRIENDS </h1>
				<Search searchchange={this.onSearchChange}/>
				<Scroll>
					<Cardlist robots={filterRobots}/>
				</Scroll>
			</div>


		);
	}
}


}

export default App;