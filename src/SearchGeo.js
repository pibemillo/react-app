import React from 'react';
import Forecast from './Forecast';

class SearchGeo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
            value: '',
            submitted: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true});
        this.getLatLong(this.state.value);
    }

    handleSearchInput(event) {
        this.setState({value: event.target.value})
        event.preventDefault();
    }

    getLatLong(searchVal) {
        fetch(`https://api.geocod.io/v1.3/geocode?q=${encodeURIComponent(searchVal.trim())}&api_key=${process.env.REACT_APP_GEO_API_KEY}`)
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                isLoaded: true,
                data: json,
            })
        })
    }

    render() {
        if(this.state.submitted) {
            return (
                <div>
                    <h1>RESULTS</h1>
                    <pre><code>{JSON.stringify(this.state.data, null, 4)}</code></pre>
                    <Forecast lat={51.4200828} lng={-116.2084792} />
                </div>
            );
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>Input location for weather forecast:</label>
                <input type="search" value={this.state.value} onChange={this.handleSearchInput} />
                <input type="submit" value="Submit" />
            </form>

        );
    }
}


export default SearchGeo;