import React from "react";
import "./SearchBar.scss";
import searchIcon from "../../assets/icon-search.svg"

function SearchBar() {
    return (
        <form action="" className="searchBar">
            <input type="text" name="username" id="username" placeholder="Search Github username..." className="searchBar__input" />
            <img src={searchIcon} alt="searchIcon" className="searchBar__icon"/>
            <button type="submit" className="searchBar__button">Search</button>
        </form>
    );
}

export default SearchBar;
