import React from 'react'
import PropTypes from 'prop-types'

function DisplayWeatherData({ data }) {

    const { cod, name, main, weather, wind, sys } = data

    function convertEpoch(epoch) {
        const d = new Date(epoch * 1000)
        return d.toLocaleTimeString(epoch, { hour: '2-digit', minute: '2-digit' })
    }

    function degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N🡡", "NNE🡥", "NE🡥", "ENE🡥", "E🡢", "ESE🡦", "SE🡦", "SSE🡦", "S🡣", "SSW🡧", "SW🡧", "WSW🡧", "W🡠", "WNW🡤", "NW🡤", "NNW🡤"];
        return arr[(val % 16)];
    }

    if (data.name === null) {
        return <div></div>
    } else if (cod === '404') {
        return <p>City not found</p>
    } else {
        return (
            <div>
                <h2>{name} - {weather[0].description.slice(0, 1).toUpperCase() + weather[0].description.slice(1)}</h2>
                <section>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='weather icon' />
                    </div>
                    <div>
                        <ul>
                            <li><span>Temperature:</span> {Math.floor(main.temp)}c</li>
                            <li><span>Feels like:</span> {Math.floor(main.feels_like)}c</li>
                            <li><span>Humidity:</span> {main.humidity}%</li>
                            <li><span>Pressure:</span> {main.pressure}hPa</li>
                            <li><span>Sunrise:</span> {convertEpoch(sys.sunrise)}</li>
                            <li><span>Sunrise:</span> {convertEpoch(sys.sunset)}</li>
                            <li><span>Wind:</span> {Math.floor(wind.speed)}mph {degToCompass(wind.deg)}</li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }

}

DisplayWeatherData.propTypes = {
    cod:PropTypes.number,
    name:PropTypes.string,
    main:PropTypes.object,
    weather:PropTypes.array,
    wind:PropTypes.object,
    sys:PropTypes.object,
}

export default DisplayWeatherData