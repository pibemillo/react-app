import React from 'react';

class SearchForm extends React.Component {
    // constrcutor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>Input location for weather forecast:</label>
                <input type="search" value={this.props.searchValue} onChange={this.props.handleSearchInput} />
                <input type="submit" value="Submit" />
            </form>

        );
    }
}

export default SearchForm;