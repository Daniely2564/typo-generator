import React from 'react';

const SearchBar = (props)=>{
    return (
        <div>
            <input type="text" value={props.searchValue} onChange={props.setSearchValue}/>
        </div>
    )
}

export default SearchBar;