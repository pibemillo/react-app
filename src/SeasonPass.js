import React from 'react';
import Forecast from './Forecast';
import ikonLocations from './data/ikonLocations';
import mcLocations from './data/mcLocations';
import epicLocations from './data/epicLocations';

const SeasonPass = (props) => {
    let data;

    props.pass === 'ikon' ? data = ikonLocations
    : props.pass === 'mountain-collective' ? data = mcLocations
    : props.pass === 'epic' ? data = epicLocations
    : data = '';

    return (
        <div>
            {data.map((mountain) => (
                    <div key={mountain.name}>
                        <h2>{mountain.name}</h2>
                        <Forecast lat={mountain.coordinates.lat} lng={mountain.coordinates.lng}/>
                    </div>
                )
            )}
            <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
        </div>
    )
}

export default SeasonPass;