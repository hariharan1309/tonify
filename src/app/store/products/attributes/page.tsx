'use client';
import AttributeForm from "@/components/Attribute/AttributeForm";
import AttributeList from "@/components/Attribute/AttributeList";
import { useState } from "react";

export default function Attributes(){
    const [showForm, setShowForm] = useState(false);
    return(
        <section className="flex flex-col items-stretch gap-10 relative">
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-5 w-[90%]">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-400">Attributes</h1>
                <button
                    onClick={() => setShowForm(true)}
                    type="button"
                    className="text-white group bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-400 dark:hover:bg-blue-500"
                    >
                    New Attribute
                    <svg
                        className="w-6 h-6 ml-2 group-hover:rotate-90 transition-transform duration-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <span className=" text-sm font-medium text-gray-700 dark:text-gray-400"> Attributes enable you to specify additional information about a product, like its size or color.</span>
            <AttributeList />
            {showForm && (
                <div className="fixed inset-0 z-[100000] flex justify-center items-center backdrop-blur-[2px] bg-black/20">
                    <div className="relative bg-white p-5 rounded-lg shadow-lg w-full h-fit max-w-lg ring-1 ring-gray-100">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-3 hover:text-blue-700 hover:scale-110 duration-200 text-blue-500 dark:text-blue-400"
                        >
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </button>
                        <AttributeForm />
                    </div>
                </div>
            )}

        </section>
    )
}