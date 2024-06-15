
export default function Settings() {
  return (
        <section className="flex flex-col gap-5">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-400">Settings</h1>
          <div className="max-w-xl flex flex-col gap-5 bg-slate-100 dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200  md:px-8 md:py-6">
              <div className="max-w-md">
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Name </label>
                  <input
                      type="text"
                      id="Name"
                      name="email"
                      autoFocus
                      className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
              </div>
              <div className="max-w-md">
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Store Name </label>
                  <input
                      type="text"
                      id="Name"
                      name="email"
                      autoFocus
                      className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
              </div>
              <div className="max-w-md">
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Store Description </label>
                  <input
                      type="text"
                      id="Name"
                      name="email"
                      autoFocus
                      className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
              </div>
              <div className="max-w-md">
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Slug </label>
                  <input
                      type="text"
                      id="Name"
                      name="email"
                      autoFocus
                      className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
              </div>
              <div className="max-w-md">
                  <label htmlFor="Name" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Wallet Address </label>
                  <input
                      type="text"
                      id="Name"
                      name="email"
                      autoFocus
                      className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
              </div>
                <div className="flex flex-row gap-10 flex-nowrap mx-auto">
                <button
                    type="button"
                    className="text-white w-20 bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 text-center items-center dark:bg-blue-400 dark:hover:bg-blue-500"
                    >
                    Save
                </button>
                <button
                    type="button"
                    className="text-white w-20 bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2 text-center items-center dark:bg-blue-400 dark:hover:bg-blue-500"
                    >
                    Edit
                </button>
                </div>
          </div>
        </section>
  );
}
