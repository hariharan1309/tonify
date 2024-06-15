'use client'
import { useState } from "react"

export default function Connect(){
    const [showPass,setShowPass]=useState(false);
    return(
        <main>
            <section className="mx-auto min-w-screen min-h-screen px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-white">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">Connect your Wallet</h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-gray-400">
                        Empower Seamless eCommerce in Telegram
                    </p>

                    <form action="#" className="mb-0 mt-6 space-y-4 bg-slate-100 rounded-lg p-4 shadow-lg dark:bg-gray-800 sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">
                        Add your <span className="text-blue-500 dark:text-blue-400">Store</span>
                        </p>

                        <div className="relative">
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Store Name </label>
                
                            <input
                                type="email"
                                id="Email"
                                name="email"
                                autoFocus
                                className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> TON Wallet Address<span className="text-xs opacity-90"> {` (for payment)`}</span> </label>
                
                            <input
                                type="email"
                                id="Email"
                                name="email"
                                autoFocus
                                className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div className=" mx-auto w-fit flex items-center justify-between">
                            <button
                                type="submit"
                                className="block group w-full  rounded-lg bg-blue-600 hover:bg-blue-500 px-20 py-3 text-sm font-medium text-white"
                                >
                                <span className="group-hover:scale-110">create</span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}