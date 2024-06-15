export default function OrderList(){
    const orderData = [
        {
          id: 1,
          date: '2023-05-15',
          customerInfo: {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '+1 123-456-7890'
          },
          productDetails: {
            name: 'Apple MacBook Pro 17',
            color: 'Silver',
            category: 'Laptop'
          },
          price: 2999,
          status: 'Delivered'
        },
        {
          id: 2,
          date: '2023-06-01',
          customerInfo: {
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            phone: '+1 987-654-3210'
          },
          productDetails: {
            name: 'Microsoft Surface Pro',
            color: 'White',
            category: 'Laptop PC'
          },
          price: 1999,
          status: 'In Delivery'
        },
        {
          id: 3,
          date: '2023-06-10',
          customerInfo: {
            name: 'Michael Johnson',
            email: 'michaeljohnson@example.com',
            phone: '+1 555-555-5555'
          },
          productDetails: {
            name: 'Magic Mouse 2',
            color: 'Black',
            category: 'Accessories'
          },
          price: 99,
          status: 'Pending'
        },
        {
          id: 4,
          date: '2023-06-08',
          customerInfo: {
            name: 'Emily Davis',
            email: 'emilydavis@example.com',
            phone: '+1 444-444-4444'
          },
          productDetails: {
            name: 'Apple Watch',
            color: 'Silver',
            category: 'Accessories'
          },
          price: 179,
          status: 'Delivered'
        },
        {
          id: 5,
          date: '2023-06-12',
          customerInfo: {
            name: 'David Wilson',
            email: 'davidwilson@example.com',
            phone: '+1 777-777-7777'
          },
          productDetails: {
            name: 'iPad',
            color: 'Gold',
            category: 'Tablet'
          },
          price: 699,
          status: 'In Delivery'
        }
      ];
      
    return(
        <section> 
        <div className="w-full flex flex-col gap-5 relative overflow-x-auto sm:rounded-md items-stretch">
            <form className="max-w-md">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
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
                        className="text-white absolute end-1.5 bottom-1.5 bg-blue-500 hover:bg-blue-600 font-medium rounded-md text-sm px-4 py-2 dark:bg-blue-400 dark:hover:bg-blue-500 "
                    >
                        Search
                    </button>
                </div>
            </form>
            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
                <thead className="text-white bg-blue-500 font-medium rounded-md px-4 dark:bg-blue-400 dark:hover:bg-blue-500 py-2">
                    <tr>
                    <th scope="col" className="p-4">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Customer Info
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product Details
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {orderData.map((order) => (
                    <tr
                        key={order.id}
                        className="bg-white group border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 cursor-pointer dark:hover:bg-gray-600"
                    >
                        <td className="w-4 p-4 relative">
                            <span className="absolute left-0 top-0 h-full w-0 group-hover:w-0.5 duration-200 bg-blue-400 dark:bg-blue-300">     
                            </span>
                            {order.id}
                        </td>
                        <td className="px-6 py-4">{order.date}</td>
                        <td className="px-6 py-4">
                        <div>
                            <p>{order.customerInfo.name}</p>
                            <p>{order.customerInfo.email}</p>
                            <p>{order.customerInfo.phone}</p>
                        </div>
                        </td>
                        <td className="px-6 py-4">
                        <div>
                            <p>{order.productDetails.name}</p>
                            <p>Color: {order.productDetails.color}</p>
                            <p>Category: {order.productDetails.category}</p>
                        </div>
                        </td>
                        <td className="px-6 py-4">${order.price}</td>
                        <td className="px-6 py-4">
                        <span
                            className={`px-2 py-1 rounded-md text-sm font-medium ${
                            order.status === 'Delivered'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'In Delivery'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                        >
                            {order.status}
                        </span>
                        </td>
                        <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                            Edit
                        </a>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <nav className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span className="font-semibold text-gray-900 dark:text-white px-2">1-10</span>
                    of
                    <span className="font-semibold text-gray-900 dark:text-white px-2">50</span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                    <li>
                        <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-500 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">10</a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
    )
}