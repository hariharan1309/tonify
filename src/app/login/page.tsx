'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Login(){
    const [showPass,setShowPass]=useState(false);
    const router = useRouter();
    return(
        <main>
            <section className="mx-auto min-w-screen min-h-screen px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-white">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-blue-600 dark:text-blue-400 sm:text-3xl">Welcome back!</h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-gray-400">
                        Empower Seamless eCommerce in Telegram
                    </p>

                    <form action="#" className="mb-0 mt-6 space-y-4 bg-slate-100 rounded-lg p-4 shadow-lg dark:bg-gray-800 sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">
                        <span className="text-blue-500 dark:text-blue-400">Sign in</span> to your account
                        </p>

                        <div>
                        <div className="relative">
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Email </label>
            
                        <input
                            type="email"
                            id="Email"
                            name="email"
                            autoFocus
                            className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        />
                        </div>
                        </div>

                        <div className="pb-4">
                            <div className="relative">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Password </label>
                                <input
                                type={showPass ? 'text' : 'password'}
                                id="password"
                                className="w-full mt-2 rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                />

                                <span
                                    className={`absolute top-[50%] cursor-pointer inset-y-0 end-0 pt-1 px-2 ${
                                showPass ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
                                }`}
                                onClick={() => setShowPass((prev) => !prev)}
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                                </span>
                                <span className={`${showPass ?'hidden':'absolute'} cursor-pointer right-2 rotate-45 top-1/2 mt-[12.5px] w-5 bg-gray-400 dark:bg-gray-500 h-[1.5px]`}></span>
                            </div>
                        </div>

                        <div className="grid grid-cols-[45%_auto] items-center justify-between">
                            <button
                                type="button"
                                className="block group w-full  rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                onClick={() => {router.push("/store")} }>
                                <span className="group-hover:scale-110">Sign in</span>
                            </button>

                            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                            {`Don't have an account yet? `}
                                <a className="underline text-blue-500 dark:text-blue-400" href="/signup">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}