import { useEffect, useState } from "react"

export function useWeather(query) {
    const [weather, setWeather] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    useEffect(() => {
        if (!query) return;
        if (!isNaN(Number(query))) {
            setError("Please enter a valid city name")
            return;
        }
        async function getData() {
            try {
                setIsLoading(true)
                setError("")
                const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=bf5aac2680bd489a8be195432250901&q=${query}&days=5&aqi=no&alerts=no`)
                if (!res.ok) throw new Error("Please enter a valid city name");
                const data = await res.json();
                setWeather(data)
                setIsLoading(false)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [query])
    return { weather, isLoading, error }
}

