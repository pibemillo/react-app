import React from 'react';
import Forecast from './Forecast';
import SearchForm from './SearchForm';

class SearchGeo extends React.Component {
    state = {
        isLoaded: false,
        data: [],
        value: '',
        submitted: false,
        city: '',
        state: '',
        country: '',
        lat: '',
        lng: '',
    }

    handleSubmit = event => {
        event.preventDefault();
        this.getLatLong(this.state.value);
    };

    handleSearchInput = event => {
        this.setState({value: event.target.value})
        event.preventDefault();
    };

    getLatLong(searchVal) {
        fetch(`https://api.geocod.io/v1.3/geocode?q=${encodeURIComponent(searchVal.trim())}&api_key=${process.env.REACT_APP_GEO_API_KEY}`)
        // .catch(err => console.error('caught error: ', err))
        .then((response) => {
            if(!response.ok) {
                console.log(response.statusText);
            }
            else {
                // console.log(response)
                // console.log(response.json())
                response.json()
                .then((json) => {
                    this.setState({
                        submitted: true,
                        isLoaded: true,
                        data: json,
                        city: typeof json.results === "undefined" || json.results.length < 1 ? '' : json.results[0].address_components.city,
                        state: typeof json.results === "undefined" || json.results.length < 1 ? '' : json.results[0].address_components.state,
                        country: typeof json.results === "undefined" || json.results.length < 1 ? '' : json.results[0].address_components.country,
                        lat: typeof json.results === "undefined" || json.results.length < 1 ? '' : json.results[0].location.lat,
                        lng: typeof json.results === "undefined" || json.results.length < 1 ? '' : json.results[0].location.lng,
                    })
                });
            }
        })
    };

    render() {
        if(this.state.submitted) {

            // var { data } = this.state;

            // var {
            //     results: [
            //         {
            //             address_components: {
            //                 city,
            //                 state,
            //                 country
            //             },
            //             location: {
            //                 lat,
            //                 lng
            //             }
            //         }
            //     ]
            // } = data || {}

            return (
                <div>
                    <SearchForm handleSubmit={this.handleSubmit} searchValue={this.state.value} getLatLong={this.getLatLong} handleSearchInput={this.handleSearchInput}/>
                    {/* <pre><code>{JSON.stringify(this.state.data, null, 4)}</code></pre> */}
                    <h1>RESULTS for {this.state.city}, {this.state.state}, {this.state.country}</h1>
                    <Forecast lat={this.state.lat} lng={this.state.lng} />
                </div>
            );
        }

        return (
            // <form onSubmit={this.handleSubmit}>
            //     <label>Input location for weather forecast:</label>
            //     <input type="search" value={this.state.value} onChange={this.handleSearchInput} />
            //     <input type="submit" value="Submit" />
            // </form>

            <SearchForm handleSubmit={this.handleSubmit} searchValue={this.state.value} getLatLong={this.getLatLong} handleSearchInput={this.handleSearchInput}/>
        );
    }
}


export default SearchGeo;