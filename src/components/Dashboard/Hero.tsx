export default function Hero(){
    const user={ id: 3, name: 'Satya Dev', storeName:'Shopy',email:'test@gmail.com',desc:'Get the latest valuable products in a reasonable price', storeThumbnail: 'https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?t=st=1718125739~exp=1718129339~hmac=e69103c82946892975d7ac11e23ca96f84e897f9e19e2a4250369cfe1aae8288&w=996' }
    return(
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="flex flex-col ">
                    <div className="flex flex-col md:flex-row gap-5 sm:gap-10 items-center">
                        <img 
                            src={user.storeThumbnail} 
                            className="w-20 h-20 aspect-square rounded-full transition-transform shadow-lg duration-200 ease-in-out transform group-hover:scale-105"
                            alt={user.name} 
                            />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">{user.storeName}</h2>
                            <div className="text-gray-700 max-sm:text-sm font-semibold">- {user.name}</div>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-500 sm:text-lg">
                        {user.desc}
                    </p>
                </div>
                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center hover:shadow-md">
                            <dt className="order-last text-lg font-medium text-gray-500">Total Products</dt>
                            <dd className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 md:text-4xl"> 4 </dd>
                        </div>
                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center hover:shadow-md">
                            <dt className="order-last text-lg font-medium text-gray-500">Official Orders</dt>

                            <dd className="text-3xl font-extrabold text-blue-600 dark:text-blue-400  md:text-4xl">24</dd>
                        </div>

                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center  hover:shadow-md">
                            <dt className="order-last text-lg font-medium text-gray-500">Total Customers</dt>

                            <dd className="text-3xl font-extrabold text-blue-600 dark:text-blue-400  md:text-4xl">12</dd>
                        </div>
                        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center  hover:shadow-md">
                            <dt className="order-last text-lg font-medium text-gray-500">Total Sales in <span className="text-blue-600 font-semibold">TON</span></dt>
                            <dd className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 md:text-4xl">480</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    )
}