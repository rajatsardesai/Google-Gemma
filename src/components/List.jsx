const List = ({ listIcon, iconAlt, listName }) => {
    return (
        <li className="p-4 mt-3 bg-color-gray-100 hover:bg-color-gray-200 rounded-md flex items-center gap-3 cursor-pointer">
            <img src={listIcon} alt={iconAlt} width={15} height={15} />
            <span>{listName}</span>
        </li>
    )
}

export default List;