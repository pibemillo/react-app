import React from 'react';

class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    fetchData(lat, lng) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DS_API_KEY}/${lat},${lng}/?units=us&exclude=hourly`)
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                isLoaded: true,
                data: json,
            })
        })
        console.log('fetching dsky data');
    }

    componentDidMount() {
        this.fetchData(this.props.lat, this.props.lng);
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {
            this.fetchData(this.props.lat, this.props.lng);
        }
    }

    render() {
        var { isLoaded, data } = this.state;

        if (!isLoaded) {
            return <div>Loading..</div>;
        }
        else {
            var {
                daily: {
                    summary: weeklySummary,
                    data: dailyForecast,
                }
            } = data || {};

            const listItems = dailyForecast.map(dailyForecast => (
                <li key={dailyForecast.time}>
                    <p>{dailyForecast.summary}</p>
                    <div>
                        High of: {dailyForecast.temperatureHigh}ºF<br />
                        Low of: {dailyForecast.temperatureLow}ºF
                    </div>
                </li>
            ));
            return (
                <div>
                    <h1>Loaded</h1>
                    <p>{weeklySummary}</p>
                    <ul>
                        {listItems}
                    </ul>
                    <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
                </div>
            )
        }

    }
}


export default Forecast;