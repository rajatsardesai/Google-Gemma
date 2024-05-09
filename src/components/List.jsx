const List = ({ listIcon, iconAlt, listName }) => {
    return (
        <li className="p-4 mt-3 bg-color-gray-100 dark:bg-color-dark-300 hover:bg-color-gray-200 hover:dark:bg-color-dark-400 dark:text-white rounded-md flex items-center gap-3 cursor-pointer">
            <img src={listIcon} alt={iconAlt} width={15} height={15} className="dark:invert" />
            <span>{listName}</span>
        </li>
    )
}

export default List;