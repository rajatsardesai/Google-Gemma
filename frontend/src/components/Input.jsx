const Input = ({ type, placeholder, className, ...props }) => {
    return (
        <input type={type} placeholder={placeholder} {...props} className={`dark:bg-color-dark-300 dark:text-white px-2 py-3 font-opensans text-sm font-medium leading-5 w-full rounded-l-lg bg-color-gray-100 focus:outline-none ${className}`} />
    )
}

export default Input;