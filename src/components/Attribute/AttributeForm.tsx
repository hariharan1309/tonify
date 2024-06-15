'use client'
import React, { useState } from 'react';

type PillItem = {
  id: number;
  name: string;
};

export default function AttributeForm() {
  const [pills, setPills] = useState<PillItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Handle adding a new item
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      const newItem: PillItem = {
        id: pills.length + 1,
        name: inputValue,
      };
      setPills([...pills, newItem]);
      setInputValue('');
    }
  };

  const handleRemove = (item: PillItem) => {
    setPills(pills.filter(pill => pill.id !== item.id));
  };
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };
  return (
    <div className="flex flex-col gap-5">
        <span>
            <h2 className="md:text-lg font-semibold leading-none">New Category</h2>
        </span>
        <div className="max-w-sm">
            <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Name </label>
            <input
                type="text"
                id="Name"
                name="name"
                autoFocus
                placeholder="Eg. Color"
                className="mt-1 w-full rounded-lg ring-1 ring-gray-100 outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
        </div>
        <div className="max-w-sm">
            <label htmlFor="Term" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Terms </label>
            <div className="flex flex-row items-center gap-5 ">
                <input
                    type="text"
                    id='Term'
                    className="mt-1 w-full rounded-lg ring-1 ring-gray-100 outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder='Eg. Red, Green, Blue'
                />
                <button onClick={handleAddItem} className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2">
                    Add
            </button>
            </div>
            <div className="flex flex-wrap">
            {pills.map(pill => (
                <div key={pill.id} className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-300">
                <div className="text-xs font-medium leading-none max-w-full flex-initial">{pill.name}</div>
                <div className="flex flex-auto flex-row-reverse">
                    <div onClick={() => handleRemove(pill)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="cursor-pointer hover:text-blue-400 rounded-full w-4 h-4 ml-2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
        <span className='text-xs font-medium text-gray-700 dark:text-gray-400'>Attribute terms can be assigned to products and variations</span>
        <div className="flex flex-row gap-5 px-5">
            <button className="w-full py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 ">Create</button>
            <button className="w-full py-2 text-sm font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-700 ">Cancel</button>
        </div>
    </div>
  );
}
