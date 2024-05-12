const Card = ({ cardIcon, iconAlt, cardTitle, cardDescription, ...props }) => {
    return (
        <div className="flex flex-col justify-center items-center w-52 h-52 text-center p-4 bg-color-gray-100 dark:bg-color-dark-300 hover:bg-color-gray-200 hover:dark:bg-color-dark-400 dark:text-white rounded-[20px] cursor-pointer" {...props}>
            <img src={cardIcon} alt={iconAlt} className="mx-auto w-6 h-6" />
            <h5 className="font-poppins text-lg leading-tight font-medium mt-4 mb-1 line-clamp-2">{cardTitle}</h5>
            <p className="font-opensans text-sm leading-tight font-medium line-clamp-2">{cardDescription}</p>
        </div>
    )
}

export default Card;