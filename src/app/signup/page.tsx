'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup(){
    const [showPass,setShowPass]=useState(false);
    const router = useRouter();
    return(     
      <section>
          <main
            className="w-full min-h-screen flex items-center justify-center px-8 py-16  sm:px-12 lg:col-span-7 lg:px-16  xl:col-span-6 dark:bg-gray-900 dark:text-white"
          >
            <div className="max-w-xl lg:max-w-3xl">
      
              <h1 className=" text-2xl font-bold text-center text-blue-500 dark:text-blue-400 sm:text-3xl md:text-4xl">
                Welcome to Shop
              </h1>
      
              <p className="mt-4 leading-relaxed text-gray-500 text-center dark:text-gray-400 ">
                Create your Telegram store today with us.
              </p>
      
              <form action="#" className=" grid grid-cols-6 gap-6 mb-0 mt-6 bg-slate-100 rounded-lg p-4 shadow-lg dark:bg-gray-800 sm:p-6 lg:p-8">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    First Name
                  </label>
      
                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
      
                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Email </label>
      
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3 relative">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700 dark:text-gray-400"> Password </label>
      
                  <input
                    type={showPass ? 'text' : 'password'}
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
                    <span className={`${showPass ?'hidden':'absolute'} cursor-pointer right-2 rotate-45 top-1/2 mt-[12.5px] w-5 bg-gray-400 dark:bg-gray-500 h-[1.5px]`}>
                    </span>
                </div>
      
                <div className="col-span-6 sm:col-span-3 relative">
                  <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Password Confirmation
                  </label>
      
                  <input
                    type={showPass ? 'text' : 'password'}
                    className="w-full mt-2 rounded-lg outline-none border-gray-200 bg-white p-3 pe-12 text-sm shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />

                    <span
                    className={`absolute top-1/2 cursor-pointer inset-y-0 end-0 pt-1 px-2 ${
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
                    <span className={`${showPass ?'hidden':'absolute'} cursor-pointer right-2 rotate-45 top-1/2 mt-[12.5px] w-5 bg-gray-400 dark:bg-gray-500 h-[1.5px]`}>
                    </span>
                </div>
                <div>
                <label htmlFor="password" className="sr-only">Password</label>


                </div>
      
                <div className="col-span-6">
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    By creating an account, you agree to our
                    <a href="#" className="text-blue-500 dark:text-blue-400  underline"> terms and conditions </a>
                    and
                    <a href="#" className=" text-blue-500 dark:text-blue-400 underline"> privacy policy</a>.
                  </p>
                </div>
      
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md  bg-blue-600 hover:bg-blue-500 px-12 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>
      
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
                    Already have an account?
                    <button type="button" onClick={() => router.push('/login')}>
                    <a href="#" className="text-blue-500 dark:text-blue-400  underline"> Log in</a>
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </main>
      </section>
    )
}