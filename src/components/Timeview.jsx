import React from 'react'
import './LocationCard.css';

export default function Timeview({info}) {
  //destrutturo il props
    return (
    <div className='timeView'>
        <div className="timeViewBody">
            <h4 className="time">{info.time}</h4>
            <h5 className="temp">{info.values.temperature}</h5>
        </div>
        <ul>
            <li>{info.values.precipitationProbability}</li>
            <li>{info.values.humidity}</li>
            <li>{info.values.windSpeed}</li>
            <li>{info.values.windDirection}</li>
        </ul>
    </div>
  )
}