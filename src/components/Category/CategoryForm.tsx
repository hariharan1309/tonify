export default function CategoryForm(){
    return(
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
                    placeholder="Eg. Electronics"
                    className="mt-1 w-full rounded-lg ring-1 ring-gray-100 outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Active</span>
            </label>
            <div className="flex flex-row gap-5 px-5">
                <button className="w-full py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 ">Create</button>
                <button className="w-full py-2 text-sm font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600 focus:outline-none dark:bg-gray-600 dark:hover:bg-gray-700 ">Cancel</button>
            </div>
        </div>
    )
}