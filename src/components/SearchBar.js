import React from 'react';

const SearchBar = () => {
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>User Input</label>
                    <input type="text" />
                </div>
            </form>
        </div>
        
    );
}

export default SearchBar;