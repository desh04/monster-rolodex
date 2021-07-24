import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [                        //Doesn't need the data inside this cause fetch the data
        {
          name: 'Frankestein',
          id:'unique1'
        },
        {
          name: 'Dracula',
          id: 'unique2'
        },
      ],
      searchField: ''                 // will strore value from the input search box
    };

    // this.handleChange = this.handleChange.bind(this); // this will be need to be done if we were be creating 
    // a function names handleChange and then we will be needing to provide the "this" key word to that function 
    // Javascript by default doesn't set scope of "this" to funtion . 
    // or we could just use the arrow funtion that will have the "this" access using Lexsosopuic scope

  }  

  componentDidMount() {                                     // using componentDidMount method, which we have access to because of Component class
    fetch('https://jsonplaceholder.typicode.com/users')     // fetching from this url // fetch returns a Promise value while it's makes an API resques to url
    .then(response => response.json())                            //response.json method convert the reponse to json formate
    .then(users => this.setState({ monsters: users}))              // setting the monster to the user // fetching the data to states Monster properties. 
    .catch(error => console.log('error in getting value from API')); // if API url fetching fails
  }


  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;   {/* This is Destructuring. Pulling properties of an object and set them to const variable */}
    {/*Above line equivalen to 
    const monsters = this.state.monster;
    const searchFeild = this.state.searchFeild*/}
    const filteredMonsters = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>
        <h1 class="headingFont">Monster Rolodex</h1>
        <SearchBox
          placeholder='Search Monster'
          handleChange={ this.handleChange }
        /> 
        {/* if want to do something immediately after setting setstate then will need to pass
        that inside the setState funtion other wise there will be delay due to Asyn operation .
        this.setState({searchField: e.target.value}, () => console.log(this.state)) */}
        {/* console.log(this.state); if access the state outside it will be one step back , not will be immediate change */} 
        
        {/*e represent Synthetic Event. synthetic event will have lot of method. We will user 'target value method'*/}
        {/*'target' method can give us value of the target. Will give us HTML value*/}
        {/* .value will give us the value typed . and that we will store in the 'searchFeild' of state */}   
        <CardList monsters={filteredMonsters} />   
      </div>
    );
  }
  
}


export default App;
