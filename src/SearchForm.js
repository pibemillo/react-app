import React from 'react';
import './search.css'

const SearchForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <label>Weather Forecast Search</label>
        <input type="search" value={props.searchValue} onChange={props.handleSearchInput} placeholder="City, State" />
        <input type="submit" value="Submit" />
        <p>US Locations Only</p>
    </form>
)

export default SearchForm;