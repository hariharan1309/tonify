'use client'
import React, { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
export default function SideBar({ children }: { children: ReactNode }){
    const [usermenu,setUsermenu]=useState(false);
    const [sidemenu,setSidemenu]=useState(false);
    const path=usePathname();
    console.log(path);
      const Dashboard=()=>(
            <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-inherit transition duration-75 dark:text-inherit group-hover:text-inherit dark:group-hover:inherit fill-current group-hover:animate-fade">
                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"/>
            </svg>
        )
      const OrderIcon=()=>(
        <svg height="32" className="flex-shrink-0 w-6 h-6 text-inherit transition duration-75 dark:text-inherit group-hover:text-inherit dark:group-hover:inherit fill-current group-hover:animate-fade" aria-hidden="true" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
            <g id="layer1" transform="translate(-12,-292)">
                <path
                d="m 15,294.0137 c -0.552285,0 -1,0.44772 -1,1 0,0.55228 0.447715,1 1,1 h 1.179688 l 2.644531,13.24414 C 17.756419,309.71932 17,310.7854 17,312.01367 c 0,1.6447 1.355301,3 3,3 h 17 c 0.552285,0 1,-0.44772 1,-1 0,-0.55228 -0.447715,-1 -1,-1 H 20 c -0.571296,0 -1,-0.4287 -1,-1 0,-0.54499 0.391926,-0.95512 0.923828,-0.99219 0.0258,0.007 0.05186,0.0128 0.07813,0.0176 l 18,-0.0254 c 0.492053,-8.8e-4 0.910363,-0.35955 0.986328,-0.8457 l 1.730469,-11 c 0.09465,-0.60653 -0.374408,-1.15439 -0.988281,-1.1543 H 18.619141 l -0.638672,-3.19726 C 17.886481,294.3495 17.476273,294.01365 17,294.01367 Z m 4.017578,6 h 19.542969 l -1.416016,9 c -5.44232,0.005 -10.885008,0 -16.330078,0 z"
                id="path22978"
                style={{

                    fillOpacity: 1,
                    fillRule: 'evenodd',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: 4.1,
                    // inkscapeStroke: 'none',
                }}
                />
                <path
                d="m 21,316.01367 c -1.645008,0 -3,1.35499 -3,3 0,1.64501 1.354992,3 3,3 1.645008,0 3,-1.35499 3,-3 0,-1.64501 -1.354992,-3 -3,-3 z m 0,2 c 0.564129,0 1,0.43587 1,1 0,0.56413 -0.435871,1 -1,1 -0.564129,0 -1,-0.43587 -1,-1 0,-0.56413 0.435871,-1 1,-1 z"
                id="circle5400"
                style={{

                    fillOpacity: 1,
                    fillRule: 'evenodd',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: 4.1,
                    // inkscapeStroke: 'none',
                }}
                />
                <path
                d="m 35,316.01367 c -1.645008,0 -3,1.35499 -3,3 0,1.64501 1.354992,3 3,3 1.645008,0 3,-1.35499 3,-3 0,-1.64501 -1.354992,-3 -3,-3 z m 0,2 c 0.564129,0 1,0.43587 1,1 0,0.56413 -0.435871,1 -1,1 -0.564129,0 -1,-0.43587 -1,-1 0,-0.56413 0.435871,-1 1,-1 z"
                id="circle5402"
                style={{

                    fillOpacity: 1,
                    fillRule: 'evenodd',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: 4.1,
                }}
                />
                <path
                d="m 23,302.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 12 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                id="path7114"
                style={{
                    fillOpacity: 1,
                    fillRule: 'evenodd',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: 4.1,
                    // inkscapeStroke: 'none',
                }}
                />
                <path
                d="m 25,305.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z"
                id="path7116"
                style={{
                    fillOpacity: 1,
                    fillRule: 'evenodd',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: 4.1,
                    // inkscapeStroke: 'none',
                }}
                />
            </g>
            </svg>
      )
      const PaymentIcon=()=>(
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"className="flex-shrink-0 w-6 p-0.5 h-6 text-inherit transition duration-75 dark:text-inherit group-hover:text-inherit dark:group-hover:inherit fill-current group-hover:animate-fade" aria-hidden="true" >
            <path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 0 1 1 1v1H2v1h17a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
      )
      const SettingIcon=()=>(
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-inherit transition duration-75 dark:text-inherit group-hover:text-inherit dark:group-hover:inherit fill-current group-hover:animate-fade" aria-hidden="true">
            <g data-name="1" id="_1">
                <path d="M293.9,450H233.53a15,15,0,0,1-14.92-13.42l-4.47-42.09a152.77,152.77,0,0,1-18.25-7.56L163,413.53a15,15,0,0,1-20-1.06l-42.69-42.69a15,15,0,0,1-1.06-20l26.61-32.93a152.15,152.15,0,0,1-7.57-18.25L76.13,294.1a15,15,0,0,1-13.42-14.91V218.81A15,15,0,0,1,76.13,203.9l42.09-4.47a152.15,152.15,0,0,1,7.57-18.25L99.18,148.25a15,15,0,0,1,1.06-20l42.69-42.69a15,15,0,0,1,20-1.06l32.93,26.6a152.77,152.77,0,0,1,18.25-7.56l4.47-42.09A15,15,0,0,1,233.53,48H293.9a15,15,0,0,1,14.92,13.42l4.46,42.09a152.91,152.91,0,0,1,18.26,7.56l32.92-26.6a15,15,0,0,1,20,1.06l42.69,42.69a15,15,0,0,1,1.06,20l-26.61,32.93a153.8,153.8,0,0,1,7.57,18.25l42.09,4.47a15,15,0,0,1,13.41,14.91v60.38A15,15,0,0,1,451.3,294.1l-42.09,4.47a153.8,153.8,0,0,1-7.57,18.25l26.61,32.93a15,15,0,0,1-1.06,20L384.5,412.47a15,15,0,0,1-20,1.06l-32.92-26.6a152.91,152.91,0,0,1-18.26,7.56l-4.46,42.09A15,15,0,0,1,293.9,450ZM247,420h33.39l4.09-38.56a15,15,0,0,1,11.06-12.91A123,123,0,0,0,325.7,356a15,15,0,0,1,17,1.31l30.16,24.37,23.61-23.61L372.06,328a15,15,0,0,1-1.31-17,122.63,122.63,0,0,0,12.49-30.14,15,15,0,0,1,12.92-11.06l38.55-4.1V232.31l-38.55-4.1a15,15,0,0,1-12.92-11.06A122.63,122.63,0,0,0,370.75,187a15,15,0,0,1,1.31-17l24.37-30.16-23.61-23.61-30.16,24.37a15,15,0,0,1-17,1.31,123,123,0,0,0-30.14-12.49,15,15,0,0,1-11.06-12.91L280.41,78H247l-4.09,38.56a15,15,0,0,1-11.07,12.91A122.79,122.79,0,0,0,201.73,142a15,15,0,0,1-17-1.31L154.6,116.28,131,139.89l24.38,30.16a15,15,0,0,1,1.3,17,123.41,123.41,0,0,0-12.49,30.14,15,15,0,0,1-12.91,11.06l-38.56,4.1v33.38l38.56,4.1a15,15,0,0,1,12.91,11.06A123.41,123.41,0,0,0,156.67,311a15,15,0,0,1-1.3,17L131,358.11l23.61,23.61,30.17-24.37a15,15,0,0,1,17-1.31,122.79,122.79,0,0,0,30.13,12.49,15,15,0,0,1,11.07,12.91ZM449.71,279.19h0Z" />
                <path d="M263.71,340.36A91.36,91.36,0,1,1,355.08,249,91.46,91.46,0,0,1,263.71,340.36Zm0-152.72A61.36,61.36,0,1,0,325.08,249,61.43,61.43,0,0,0,263.71,187.64Z" />
            </g>
        </svg>
      )
      const MenuIcon=()=>(
        <svg className="flex-shrink-0 w-5 h-5 text-inherit transition duration-75 dark:text-inherit group-hover:text-inherit dark:group-hover:inherit fill-current group-hover:animate-fade" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
        </svg>

      )
    const ProductIcon=()=>(
        <svg height="32" id="icon" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 fill-current text-inherit transition duration-75 dark:text-inherit group-hover:text-inherit dark:group-hover:text-inherit group-hover:animate-fade" aria-hidden="true">
            <defs>
                <style>{`
                .cls-1 {
                    fill: none;
                }
                `}</style>
            </defs>
            <path d="M29.4819,8.624l-10-5.5a1,1,0,0,0-.9638,0l-10,5.5a1,1,0,0,0,0,1.752L18,15.5913V26.3086l-3.0362-1.6693L14,26.3912l4.5181,2.4848a.9984.9984,0,0,0,.9638,0l10-5.5A1,1,0,0,0,30,22.5V9.5A1,1,0,0,0,29.4819,8.624ZM19,5.1416,26.9248,9.5,19,13.8584,11.0752,9.5Zm9,16.7671-8,4.4V15.5913l8-4.4Z" />
            <rect height="2" transform="translate(12 30) rotate(-180)" width="8" x="2" y="14" />
            <rect height="2" transform="translate(16 46) rotate(-180)" width="8" x="4" y="22" />
            <rect height="2" transform="translate(20 38) rotate(-180)" width="8" x="6" y="18" />
            <rect className="cls-1" data-name="&lt;Transparent Rectangle&gt;" height="32" id="_Transparent_Rectangle_" width="32" />
        </svg>
    )
    return (
        <main>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-3 lg:p-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" onClick={()=>setSidemenu((prev)=>!prev)} aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden  focus:outline-none dark:text-gray-400">
                            <span className="sr-only">Open sidebar</span>
                            {
                                sidemenu?
                                <svg viewBox="0 0 512 512" className="w-6 h-6 p-0.5 flex-shrink-0 text-inherit transition duration-75 dark:text-inherit group-hover:text-inherit dark:group-hover:inherit fill-current group-hover:animate-fade" aria-hidden="true" fill="currentColor" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 512 512"><path d="M437.5 386.6 306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z" ></path></svg>
                                :
                                <svg className="w-6 h-6 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            }
                        </button>
                        <a href="/" className="flex ms-2 md:me-24 items-center gap-2">
                            <svg className="flex-shrink-0 size-5 sm:size-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
                            </svg>
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Shop</span>
                        </a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3 flex-col">
                            <div>
                                <button type="button" className="peer flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={()=>setUsermenu((prev)=>!prev)}>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src="https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?t=st=1718125739~exp=1718129339~hmac=e69103c82946892975d7ac11e23ca96f84e897f9e19e2a4250369cfe1aae8288&w=996" alt="user photo"/>
                                </button>
                            </div>
                            <div className={`z-50 ${usermenu?'absolute min-w-60 top-full right-1 md:right-2':'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown-user">
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                                    Neil Sims
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                    test@gmail.com
                                    </p>
                                </div>
                                <ul role="none">
                                    <li className="px-4 py-1 flex flex-row flex-nowrap items-center text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg className="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        </svg>
                                        <a href="#" className="block px-4 py-2 text-sm " role="menuitem">Profile</a>
                                    </li>
                                    <li className="px-4 py-1 flex flex-row flex-nowrap items-center text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white rounded-b-md">
                                        <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                                        </svg>
                                        <a href="#" className="block px-4 py-2 text-sm " role="menuitem">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40  w-full lg:w-64 h-screen transition-transform  lg:translate-x-0  ${sidemenu?'translate-x-0':'-translate-x-full'} `} aria-label="Sidebar">
                <div className="max-lg:grid grid-cols-2 h-full">
                    <div className="h-full px-4 max-sm:w-auto pb-4 pt-20 md:pt-24 overflow-y-auto bg-white lg:border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="/store" className="flex items-center p-2 rounded-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 group">
                                    <Dashboard />
                                    <span className="ms-3">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="/store/orders" className="flex items-center p-2 rounded-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 group">
                                    <OrderIcon/>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="/store/products" className="flex items-center p-2 rounded-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 group">
                                    <ProductIcon />
                                    <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                                </a>
                                <div className={` ${path.includes('products') ?'flex':'hidden'}  flex-col pl-5`}>
                                    <a href="/store/products/attributes" className="flex items-center p-2 rounded-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 group">
                                        <MenuIcon />
                                        <span className="flex-1 ms-3 whitespace-nowrap"> Attributes</span>
                                    </a> 
                                    <a href="/store/products/categories" className="flex items-center p-2 rounded-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 group">
                                        <MenuIcon />
                                        <span className="flex-1 ms-3 whitespace-nowrap"> Categories</span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <a href="/store/payments" className="flex items-center p-2 rounded-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 group">
                                    <PaymentIcon/>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Payment</span>
                                </a>
                            </li>
                            <li>
                                <a href="/store/settings" className="flex items-center p-2 rounded-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 group">
                                <SettingIcon/>
                                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-auto h-full backdrop-blur-sm" onClick={()=>{setSidemenu(false)}}>
                    </div>
                </div>
            </aside>

            <div className="p-4 lg:ml-64 pt-20 md:pt-24 max-w-full h-screen overflow-y-auto dark:bg-gray-900 dark:text-white">
                    {children}
            </div>
        </main>
    );
  };
