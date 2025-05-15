import React, {Component} from 'react';
import CardList from '../components/CardList.jsx';
import { robots } from '../components/robots.js';
import SearchBox from '../components/SearchBox.jsx';
import Scroll from '../components/Scroll.jsx'
import './App.css'; // or './App.css' if added there


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }   
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})})
        //this.setState({robots: robots})
        this.setState({robots: robots});
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})   
    }


    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
            return (
                <div className='tc'>
                    <h1 style = {{fontFamily : 'Sega', fontWeight: 200, color: '#0ccac4'}}>RoboFriends</h1>
                    
                        <SearchBox searchChange ={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                    
                    
                </div>
        
            );
        
    }
}


export default App;