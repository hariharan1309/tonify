const Checkbox=()=>(
    <label
        className="relative max-w-fit flex cursor-pointer items-center rounded-full p-1 "
        htmlFor="checkbox"
        data-ripple-dark="true"
        >
        <input
        id="checkbox"
        type="checkbox"
        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
        />
        <label htmlFor="checkbox" className="sr-only">checkbox</label>
        <div className="pointer-events-none absolute z-40 top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
                >
                <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
                ></path>
            </svg>
        </div>
    </label>
)

export default function InventorySection(){
    return(
        <div className="flex flex-col gap-5 relative">
            <div className="max-w-sm">
                <label htmlFor="Price" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> SKU </label>
    
                <input
                    type="number"
                    id="Price"
                    name="price"
                    autoFocus
                    className="mt-2 w-full rounded-lg outline-none border-gray-200 bg-white p-2 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <div className="flex flex-row gap-2 items-center">
                <Checkbox />
                <span className="font-[450]">Track stock quantity for this product</span>
            </div>
        </div>
    )
}