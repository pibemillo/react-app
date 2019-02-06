import React from 'react';
import './footer.css'

const Footer = () => (
    <footer>
        <h4>Built with:</h4>
        <ul>
            <li>Create-React-App</li>
            <li><a href="https://darksky.net/" target="blank">DarkSky API</a></li>
            <li><a href="http://geocodi.io" target="blank">Geocodio API</a></li>
            <li><a href="https://github.com/roadmanfong/react-skycons" target="blank">React-Skycons</a></li>
            <li>React Router</li>
            <li>Deployment: <a href="https://zeit.co/now" target="blank">Now</a></li>
        </ul>
        <a href="https://github.com/pibemillo/weather-forecast-app" target="blank">Github Repo</a>
    </footer>
)

export default Footer;