import WeatherList from "./WeatherList";

function CurWeather({ data, name }) {
    if (!data || data.length === 0) {
        return;
    }
    return (
        <>
            <div className="space-y-3">
                <WeatherList data={data} name={name} />
            </div>
        </>
    )
}

export default CurWeather
