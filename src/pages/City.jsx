import { useParams } from "react-router-dom"
import CurWeather from "../components/CurWeather"
import Error from "../components/Error"
import Spinner from "../components/Spinner"
import { useWeather } from "../libs/useWeather"

function City() {
    const { country } = useParams()
    const { weather, isLoading, error } = useWeather(country)
    if (!weather) {
        return <Error message={error} />
    }
    const { location, forecast } = weather
    return (
        <div>
            {isLoading && <Spinner />}
            {error && <Error message={error} />}
            {!isLoading && !error && <CurWeather data={forecast?.forecastday} name={location?.country} />}
        </div>
    )
}

export default City
