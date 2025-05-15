import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <input 
            className="card-text pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange}
        />
    );
};

export default SearchBox;
