import ProductList from "@/components/ProductList";
import Link from "next/link";
export default function Products(){
    return (
        <section className="flex flex-col w-full items-stretch p-2 gap-5 lg:gap-10">
            <div className="flex flex-col md:flex-row md:justify-between gap-5 w-[90%]">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-400">Products</h1>
                    <Link href='/store/products/new' type="button" className="text-white group bg-blue-500 hover:bg-blue-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-400 dark:hover:bg-blue-500">
                        New Product
                        <svg className="w-6 h-6 ml-2 group-hover:rotate-90 transition-transform duration-300 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
                        </svg>
                    </Link>
                </div>
            <ProductList />
        </section>
    )
}