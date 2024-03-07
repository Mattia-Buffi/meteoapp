import React from 'react';
import './LocationCard.css';
import Timeview from './Timeview';

export default function LocationCard({reportAPI}) {
    //inserisco il richiamo alla location
    console.log(reportAPI[2].time);
    let imgCloud="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2wrJmhx-pknOodpd8awNUYHBqVIHj8P71UtbFbRIng&s";
    return (
        <div className='locationCard'>
            {/* <img className='locationImg' src={imgCloud} alt="" /> */}
            <h2 className='location-point'>Belluno</h2>
            <div className="header-card">
                <h3 className="now-time">{reportAPI[2].time}</h3>
                <p className="location-temp">{reportAPI[2].values.temperature}<span>°</span></p>
            </div>
            <div className="body-card">
            {/* passo l'oggetto riferito all'ora delle succesive 4 */}
            <Timeview info={reportAPI[3]}/>
            <Timeview info={reportAPI[4]}/>
            <Timeview info={reportAPI[5]}/>
            <Timeview info={reportAPI[6]}/>
            </div>
        </div>
  )
}
