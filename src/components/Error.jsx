

const Error = ({mensaje}) => {
    return (
        <div className="bg-red-600 text-center text-white font-bold mb-3 py-3 rounded-lg shadow-md" >
            <p>{mensaje}</p>
        </div>
    )
}

export default Error