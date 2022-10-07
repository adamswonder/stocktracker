import React from "react";

const Search = ({ change }) => {
    return (
        <div>
            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Type to search" onChange={change} />
            </div>
        </div>
    )
}
export default Search