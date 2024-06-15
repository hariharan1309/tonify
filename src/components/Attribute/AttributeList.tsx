import React from 'react';

const attributes = [
  { name: "Color", values: ["Red", "Green", "Blue"] },
  { name: "Size", values: ["Small", "Medium", "Large"] },
  { name: "Material", values: ["Cotton", "Polyester", "Silk"] },
  { name: "Style", values: ["Casual", "Formal", "Sport"] },
  { name: "Brand", values: ["Brand A", "Brand B", "Brand C"] },
];

const Checkbox = () => (
  <label className="relative flex cursor-pointer items-center rounded-full p-1">
    <input
      type="checkbox"
      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
    />
    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  </label>
);

const renderAttributeTableRows = () => {
  return attributes.map((attribute, index) => (
    <tr
      key={index}
      className="bg-white group border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer dark:hover:bg-gray-600"
    >
      <td className="w-4 p-4 relative">
        <span className="absolute left-0 top-0 h-full w-0 group-hover:w-0.5 duration-200 bg-blue-400 dark:bg-blue-300"> </span>  
        <Checkbox />
      </td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {attribute.name}
      </td>
      <td className="px-6 py-4">
        {attribute.values.join(', ')}
      </td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  ));
};

export default function AttributeList() {
  return (
    <section className="flex flex-col gap-10">
      <div className="max-w-2xl flex flex-col gap-5 relative overflow-x-auto sm:rounded-md items-stretch">
        <form className="max-w-md">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full outline-none p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-slate-50 cursor-pointer border-l border-blue-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search ..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-1.5 bottom-1.5 bg-blue-500 hover:bg-blue-600 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-400 dark:hover:bg-blue-500"
            >
              Search
            </button>
          </div>
        </form>
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
          <thead className="text-white bg-blue-500 font-medium rounded-md px-4 dark:bg-blue-400 dark:hover:bg-blue-500 py-2">
            <tr>
              <th scope="col" className="p-4">
                <label className="relative flex cursor-pointer items-center rounded-full p-1">
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity border-white checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                  />
                  <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </label>
              </th>
              <th scope="col" className="px-6 py-3">Attribute</th>
              <th scope="col" className="px-6 py-3">Values</th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="text-sm">{renderAttributeTableRows()}</tbody>
        </table>
      </div>
    </section>
  );
}
