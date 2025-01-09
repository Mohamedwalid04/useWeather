
function Error({ message }) {
    return (
        <div className="space-y-3 flex justify-center items-center">
            <h2 className="text-stone-500 text-4xl">
                {message}❗
            </h2>
        </div>
    )
}

export default Error
