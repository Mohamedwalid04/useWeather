import WeatherCard from "./WeatherCard"

function WeatherList({ data, name }) {
    return (
        <>
            <div className="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[450px_450px]">
                {data.map((el, i) => <WeatherCard key={i} weatherData={el.day} date={el.date} name={name} />)}
            </div>
        </>
    )
}

export default WeatherList
