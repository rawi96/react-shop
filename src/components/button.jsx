function Button({ value, ...otherProps }) {
    return (
        <input className="bg-black hover:bg-gray-500 text-white cursor-pointer uppercase text-lg p-3 rounded" 
        value={value} {...otherProps} />
    );
}

export default Button;
