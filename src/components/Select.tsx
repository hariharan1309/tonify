'use client'
import React, { useEffect, useMemo, useState } from 'react';

type SelectProps={
    title:string
}
const Select = ({title}:SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedValue, setSelectedValue] = useState<string | null >(null);
    const items = ['Python', 'Javascript', 'Ruby'];
    const [filteredItems, setFilteredItems] = useState(items);

    const toggleSelect = () => setIsOpen(!isOpen);

    const handleSelect = (value:string) => {
        setSelectedValue(value);
        setIsOpen(false);
        setSearch(''); 
        setFilteredItems(items); 
    };

    const filteredData = useMemo(() => {
        if (search) {
            return items.filter(item => item.toLowerCase().includes(search.toLowerCase()));
        }
        return items;
    }, [search]);

    useEffect(() => {
        setFilteredItems(filteredData);
    }, [filteredData]);

    return (
        <div className="flex-auto flex flex-col items-center text-sm">
            <div className="flex flex-col items-center relative w-full">
                <div className="w-full">
                    <label htmlFor={title} className="block text-sm font-medium text-gray-700 dark:text-gray-400 py-1 "> {title} </label>
                    <div className="my-2 bg-white p-1 flex border border-gray-200 rounded-lg">
                    <div className="flex flex-auto flex-wrap">
                            <input
                                type="text"
                                value={selectedValue? selectedValue : ''}
                                readOnly
                                id={title}
                                placeholder='select the below option'
                                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                                onClick={toggleSelect}
                            />
                        </div>
                        <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                            <button
                                className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
                                onClick={toggleSelect}
                                aria-label="Toggle Select"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`feather feather-chevron-${isOpen ? 'up' : 'down'} w-4 h-4`}
                                >
                                    <polyline points={isOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="absolute shadow top-full z-40 w-full left-0 rounded-lg max-h-select overflow-y-auto bg-white">
                        <div className="flex flex-col w-full">
                            <input
                                type="text"
                                placeholder="search ..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="p-1.5 px-4 border-b outline-none w-full rounded-t-lg"
                            />
                            {filteredItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`cursor-pointer w-full group border-gray-200 hover:bg-gray-300  ${index === 0 ? 'rounded-t-lg' : ''} ${index === filteredItems.length - 1 ? 'rounded-b-lg' : ''}`}
                                    onClick={() => handleSelect(item)}
                                >
                                    <div className="flex w-full items-center p-1.5 pl-2 border-transparent bg-white border-l-2 relative hover:bg-sky-50 hover:text-blue-600 hover:border-blue-600">
                                        <div className="w-full flex items-center hover:-translate-x-1 duration-300">
                                            <div className="mx-2 leading-6">{item}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Select;
