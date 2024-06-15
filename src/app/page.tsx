import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-gray-50">
      <nav className="bg-white flex flex-row justify-between p-5 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <a href="/" className="flex ms-2 md:me-24 items-center gap-2">
            <svg className="flex-shrink-0 size-5 sm:size-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
            </svg>
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Shopy</span>
        </a>
        <div className="flex">
              <a className="block w-full rounded border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium hover:scale-110 duration-200 text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/login"
              >
                Sign In
              </a>
        </div>
      </nav>
      <section className="text-gray-800 bg-white">
        <div className="mx-auto flex flex-col items-center lg:flex-row py-20">
          <div className="w-full text-center">
            <h1 className="text-blue-500 dark:blue-400 text-3xl font-extrabold  sm:text-4xl">
              Seamless eCommerce Integration with Shopy
              <span className="block">Increase Your Conversions</span>
            </h1>
            <p className="mt-4 text-lg max-w-3xl px-5 mx-auto text-gray-600">
              Shopy offers a no-code platform to set up and manage your eCommerce store directly in
              Telegram. Effortlessly manage products, accept payments in TON coin, and reach your
              audience like never before.
            </p>
            <div className="mt-5 gap-5 flex flex-col w-full items-center justify-center">
              <h2 className="mt-6 text-xl font-bold tracking-wide text-gray-800 lg:text-2xl">
                <span className="text-blue-500 dark:text-blue-400">Build</span> Your Online Store with Ease
              </h2>
              <div className="space-y-5">
                <FeatureItem text="Sign up and Create Your Store" />
                <FeatureItem text="Connect Your Wallet and Integrate with Telegram" />
                <FeatureItem text="Start Selling Your Products" />
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="block w-full rounded border border-blue-600 bg-blue-600 hover:scale-110 duration-200 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/signup"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureItem({ text } : {text: string}) {
  return (
    <li className="flex items-center text-gray-700 hover:translate-y-[-1px] transition duration-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mx-2 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="mx-2">{text}</span>
    </li>
  );
}