import { useState } from "react"
import "../styles/app.css"
import { useNavigate } from "react-router-dom"

function Home() {
    const [city, setCity] = useState("")
    const navigate = useNavigate()
    function handleClick() {
        if (!city) {
            alert("Please enter a city name")
        } else {
            navigate(`/${city}`)
        }

    }
    return (
        <div className="container">
            <h1 className="font-bold text-2xl text-orange-500">Start Searching</h1>
            <input type="text" className="text-black" id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
            <button id="getWeather" onClick={() => handleClick()}>Get Weather</button>
            <div className="weather" id="weather"></div>
        </div>
    )
}

export default Home
