function WeatherCard({ date, weatherData, name }) {
    if (!weatherData) {
        return;
    }
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const {
        avghumidity,
        avgtemp_c,
        condition,
        maxtemp_c,
        uv,
    } = weatherData

    const time = new Date(date)
    const Day = days[time.getDay()]
    return (
        <div className="w-[320px] h-full space-y-3 bg-white p-2 rounded-md sm:w-[300px] xl:w-[450px]">
            <div className="w-full">
                <h2 className="text-3xl text-black font-bold">{name}</h2>
                <h3 className="text-gray-500" >{Day}</h3>
                <h3 className="text-2xl w-fit text-blue-400  ml-auto">{condition.text}</h3>
            </div>
            <div className="w-full flex justify-between items-center">
                <img className="w-28" src={condition.icon} alt={condition.text} />
                <span className="text-4xl text-orange-400">{Math.floor(avgtemp_c)} °C</span>
            </div>
            <ul className="text-black grid grid-cols-2 gap-3">
                <li className="flex flex-col items-center">
                    <span className="block text-2xl font-bold text-blue-500">
                        {avghumidity}%
                    </span>
                    <span className="block text-xl font-semibold">
                        Humidity
                    </span>

                </li>
                <li className="flex flex-col items-center" >
                    <span className="block text-2xl font-bold text-orange-500">
                        {maxtemp_c} °C
                    </span>
                    <span className="block text-xl font-semibold">
                        Max Tempreture
                    </span>
                </li>
                <li className="flex flex-col items-center" >
                    <span className="block text-2xl font-bold text-indigo-500">
                        {uv}
                    </span>
                    <span className="block text-xl font-semibold">
                        UV
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default WeatherCard
