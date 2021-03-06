function Button({ value, isGoogle, ...otherProps }) {
    return (
        <input className={`${isGoogle ? 'bg-blue-600 hover:bg-blue-900' : 'bg-black hover:bg-gray-500'} text-white cursor-pointer uppercase text-lg p-3 rounded text-center m-1`} 
        defaultValue={value} {...otherProps} />
    );
}

export default Button;
