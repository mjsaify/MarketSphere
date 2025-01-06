
const DropDown = () => {
    return (
        <div className="relative font-[sans-serif]">
            <button
                type="button"
                id="dropdownToggle"
                className="px-5 py-2.5 border border-gray-300 text-gray-800 text-sm outline-none bg-white hover:bg-gray-50"
            >
                Sort
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-gray-500 inline ml-3"
                    viewBox="0 0 24 24"
                >
                    <path
                        fillRule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clipRule="evenodd"
                        data-original="#000000"
                    />
                </svg>
            </button>
            <ul
                id="dropdownMenu"
                className="absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto"
            >
                <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                    Dropdown option
                </li>
                <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                    Cloth set
                </li>
                <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                    Sales details
                </li>
                <li className="py-3 px-5 hover:bg-gray-50 text-gray-800 text-sm cursor-pointer">
                    Marketing
                </li>
            </ul>
        </div>

    )
}

export default DropDown