import { useState } from "react"
import axios from "axios"

function Reaport() {

    // Input Usestate
    const [city, setcity] = useState("")

    // Name Vale Section
    const [name, setname] = useState()

    // Box Value Section
    const [weather, setweather] = useState()
    const [temp, settemp] = useState()
    const [dec, setdec] = useState()
    const [wind, setwind] = useState()
    const [deg, setdeg] = useState()
    const [gust, setgust] = useState()


    function handlenput(evt) {
        setcity(evt.target.value)
    }

    function handlebtn() {

        var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6905b99a1b4f03959e72f15d8a57841a`)

        data.then(function (wdata) {
            setname(wdata.data.name)
            setweather(wdata.data.weather[0].main)
            settemp(wdata.data.main.temp)
            setdec(wdata.data.weather[0].description)
            setwind(wdata.data.wind.speed)
            setdeg(wdata.data.wind.deg)
            setgust(wdata.data.wind.gust)

            setcity("")
        })
    }

    return (
        <>
            <main class="container">

                <section class="search-area">

                    <div class="search-label">
                        📍 SEARCH YOUR CITY
                    </div>

                    <div class="search">

                        <span>🔎</span>

                        <input type="text" id="cityInput" placeholder="Enter city name..." onChange={handlenput} value={city}></input>

                        <button id="getReport" onClick={handlebtn}> Get Report<b>→</b></button>

                    </div>

                </section>


                {/* Output */}
                <section class="weather-card">

                    {/* Top */}
                    <div class="weather-header">

                        <div>
                            <span class="result-label">
                                🌐 WEATHER RESULT
                            </span>

                            <h2 id="cityName">
                                {name}
                            </h2>

                            <p>
                                Current atmospheric information
                            </p>
                        </div>

                        <div class="main-emoji">
                            ☁️
                        </div>

                    </div>


                    {/* Six Boxes */}
                    <div class="weather-grid">


                        {/* 01 */}
                        <div class="weather-box">

                            <div class="box-top">
                                <span>01</span>
                                <div class="emoji">☁️</div>
                            </div>

                            <p>WEATHER</p>

                            <h3 id="weather">
                                {weather}
                            </h3>

                        </div>


                        {/* 02 */}
                        <div class="weather-box">

                            <div class="box-top">
                                <span>02</span>
                                <div class="emoji">🌡️</div>
                            </div>

                            <p>TEMPERATURE</p>

                            <h3>
                                <span id="temperature">
                                    {temp}
                                </span>

                                <small>K</small>
                            </h3>

                        </div>


                        {/* 03 */}
                        <div class="weather-box">

                            <div class="box-top">
                                <span>03</span>
                                <div class="emoji">📝</div>
                            </div>

                            <p>DESCRIPTION</p>

                            <h3 id="description">
                                {dec}
                            </h3>

                        </div>


                        {/* 04 */}
                        <div class="weather-box">

                            <div class="box-top">
                                <span>04</span>
                                <div class="emoji">💨</div>
                            </div>

                            <p>WIND SPEED</p>

                            <h3>
                                <span id="windSpeed">
                                    {wind}
                                </span>

                                <small>m/s</small>
                            </h3>

                        </div>


                        {/* 05 */}
                        <div class="weather-box">

                            <div class="box-top">
                                <span>05</span>
                                <div class="emoji">🧭</div>
                            </div>

                            <p>WIND DEG</p>

                            <h3>
                                <span id="windDeg">
                                    {deg}
                                </span>

                                <small>°</small>
                            </h3>

                        </div>


                        {/* 06 */}
                        <div class="weather-box">

                            <div class="box-top">
                                <span>06</span>
                                <div class="emoji">🌬️</div>
                            </div>

                            <p>WIND GUST</p>

                            <h3>
                                <span id="windGust">
                                    {gust}
                                </span>

                                <small>m/s</small>
                            </h3>

                        </div>

                    </div>

                </section>
            </main>
        </>
    )
}

export default Reaport