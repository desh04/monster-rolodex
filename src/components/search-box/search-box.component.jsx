import React from 'react';

import './search-box.style.css';

export const SearchBox = ({ placeholder , handleChange }) => (

    <input 
        className = 'search'
        type='search' 
        placeholder={ placeholder } 
        onChange={ handleChange } 
        /* if want to do something immediately after setting setstate then will need to pass
        that inside the setState funtion other wise there will be delay due to Asyn operation .
        this.setState({searchField: e.target.value}, () => console.log(this.state)) */
        /* console.log(this.state); if access the state outside it will be one step back , not will be immediate change */ 
         
    />/*e represent Synthetic Event. synthetic event will have lot of method. We will user 'target value method'*/
    /*'target' method can give us value of the target. Will give us HTML value*/
    /* .value will give us the value typed . and that we will store in the 'searchFeild' of state */
)