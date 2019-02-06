import React from 'react';
import Skycons from 'react-skycons';
import './forecast.css';


class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,
        }
    }

    fetchData(lat, lng) {
        if (lat && lng) {
            fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DS_API_KEY}/${lat},${lng}/?units=us&exclude=hourly`)
            .then((response) => {
                if(!response.ok) {
                    console.log(response.statusText);
                    this.setState({
                        isLoaded: false
                    })
                } else {
                    response.json()
                    .then((json) => {
                        this.setState({
                            isLoaded: true,
                            data: json,
                        })
                    })
                    console.log('fetching dsky data');
                }
            })
        }
        else {
            console.log('no lat, lng');
            this.setState({
                isLoaded: false,
            })
        }
    }

    componentDidMount() {
        this.fetchData(this.props.lat, this.props.lng);
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat || this.props.lng !== prevProps.lng) {
            this.fetchData(this.props.lat, this.props.lng);
        }
    }

    convertDate = (date) => (
        new Date(date*1000).toLocaleDateString('en-US', {weekday: 'long', month: 'short', day: 'numeric'})
    )

    render() {
        var { isLoaded, data } = this.state;

        if (!isLoaded) {
            return (
                <p>Loading data from DarkSky or API limit has been reaced for daily free usage (try again mañana).</p>
            )
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
                    <div>
                        <Skycons
                            color='white'
                            icon= {dailyForecast.icon.replace(/-/g, '_').toUpperCase()}
                            autoplay={false}
                        />
                    </div>
                    <p>{this.convertDate(dailyForecast.time)}</p>
                    <p>{dailyForecast.summary}</p>
                    <div>
                        High of: {dailyForecast.temperatureHigh}ºF<br />
                        Low of: {dailyForecast.temperatureLow}ºF
                    </div>
                </li>
            ));
            return (
                <div className="forecast-container">
                    <p>{weeklySummary}</p>
                    <ul className="forecast">
                        {listItems}
                    </ul>
                </div>
            )
        }

    }
}


export default Forecast;