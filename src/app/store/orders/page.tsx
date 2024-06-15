import OrderList from "@/components/Orders/OrderList";

export default function Orders(){
    return (
        <section className="flex flex-col gap-10 items-stretch">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-400">Order Details</h1>
                <div>
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-6 text-center hover:shadow-md">
                            <dt className="order-last text-lg font-medium text-gray-500">Total Orders</dt>

                            <dd className="text-3xl font-extrabold text-blue-600 dark:text-blue-400  md:text-4xl">24</dd>
                        </div>
                        <div className="flex flex-col rounded-lg bg-green-50 px-4 py-6 text-center hover:shadow-md">
                            <dt className="order-last text-lg font-medium text-gray-500">Delivered</dt>
                            <dd className="text-3xl font-extrabold text-green-600 dark:text-green-400 md:text-4xl"> 14 </dd>
                        </div>
                        <div className="flex flex-col rounded-lg bg-yellow-50 px-4 py-6 text-center hover:shadow-md">
                            <dt className="order-last text-lg font-medium text-gray-500">In Delivery</dt>

                            <dd className="text-3xl font-extrabold text-yellow-600 dark:text-yellow-400  md:text-4xl">8</dd>
                        </div>
                        <div className="flex flex-col rounded-lg bg-red-50 px-4 py-6 text-center hover:shadow-md">
                            <dt className="order-last text-lg font-medium text-gray-500">Pending</dt>
                            <dd className="text-3xl font-extrabold text-red-600 dark:text-red-400 md:text-4xl">4</dd>
                        </div>
                    </dl>
                </div>
            <OrderList />
        </section>
    )
}