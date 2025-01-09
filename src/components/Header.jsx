import { Link } from "react-router-dom"
import logo from "../assets/cloudy.png"

function Header() {
    return (
        <header className="w-full flex justify-between px-2 items-center h-[70px] bg-blue-950 mb-2">
            <div className="flex items-center">
                <img className="w-10 h-10" src={logo} alt="cloudy" />
                <h1 className="text-white text-2xl">useWeather</h1>
            </div>
            <div>
                <Link className="flex justify-center w-fit h-[40px] p-2 bg-orange-500 text-white text-md font-bold duration-300 hover:bg-orange-600" to={"/"}>Back To HomePage</Link>
            </div>
        </header>
    )
}

export default Header
