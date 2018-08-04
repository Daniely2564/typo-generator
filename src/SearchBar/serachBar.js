import React from 'react';

const SearchBar = (props)=>{
    return (
        <div className="w-75 mx-auto">
            <input
                type="text" 
                value={props.searchValue} 
                onChange={props.setSearchValue}
                className="form-control"
                maxLength={100}
            />
        </div>
    )
}

export default SearchBar;