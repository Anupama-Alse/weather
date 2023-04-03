import React from 'react';
//import {Card,CardContent, CardHeader } from 'semantic-ui-react';
import moment from 'moment';
import './weather.css';
import {Button} from 'semantic-ui-react';

const refresh=()=>{
    window.location.reload();
}

const  Weathercard=({weatherData})=>(
    <section className='container'>
        <div className="card">
            <div className='header'>
            <h1 className='heading'>{weatherData.name}</h1>
            <Button className="button" inverted color="white" circular icon='refresh' onClick={refresh}/>
            </div>
            <div className="content day">
            <p>Day:{moment().format('dddd')} <span></span></p>
            <p>{moment().format('LL')}</p>
           </div>
            <div className="content">
            <p>Sunrise: {new Date(weatherData.sys.sunrise*1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(weatherData.sys.sunset*1000).toLocaleTimeString('en-IN')}</p>
            </div>
           
            <div className="content">
           <p>Temperature: {weatherData.main.temp}&deg;C</p>
           <p>{weatherData.weather[0].description}</p>
           </div>
           
            
        </div>
    </section>
)
export default Weathercard;