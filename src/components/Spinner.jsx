function Spinner() {
    return (
        <div className="flex flex-row gap-2">
            <div className="w-6 h-6 rounded-full bg-stone-400 animate-bounce [animation-delay:.7s]"></div>
            <div className="w-6 h-6 rounded-full bg-stone-400 animate-bounce [animation-delay:.3s]"></div>
            <div className="w-6 h-6 rounded-full bg-stone-400 animate-bounce [animation-delay:.7s]"></div>
        </div>
    )
}

export default Spinner
