import React from 'react';
import Forecast from './Forecast';
import ikonLocations from './data/ikonLocations';
import mcLocations from './data/mcLocations';

const SeasonPass = (props) => {
    let data;

    props.pass === 'ikon' ? data = ikonLocations
    : props.pass === 'mountain-collective' ? data = mcLocations
    : data = '';

    return (
        <div>
            {data.map((mountain) => (
                    <div key={mountain.name}>
                        <h2 className="text-center uppercase">{mountain.name}</h2>
                        <Forecast lat={mountain.coordinates.lat} lng={mountain.coordinates.lng}/>
                    </div>
                )
            )}
        </div>
    )
}

export default SeasonPass;