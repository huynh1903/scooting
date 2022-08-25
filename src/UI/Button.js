const Button = (props) => {
    return (
        <div>
            <button className="text-white font-bold bg-lime-400 border-2 border-lime-400 px-8 py-3 hover:cursor-pointer hover:bg-transparent hover:text-lime-400 ease-in-out duration-500">{props.name}</button>
        </div>
    )
}

export default Button;