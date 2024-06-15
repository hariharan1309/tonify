export default function HeadForm(){
    return(
        <section className="flex flex-col gap-5 bg-slate-100 dark:bg-gray-800 rounded-lg p-4 shadow-md  sm:p-6 lg:p-8">
            <div className="max-w-sm">
                <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Name </label>
    
                <input
                    type="text"
                    id="Name"
                    name="email"
                    autoFocus
                    className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </div>
            <div>
                <label htmlFor="Desc" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Description  </label>
            </div>
        </section>
    )
}