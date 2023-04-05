function App () {
  return (
    <>
      <header className="header text-white">
        <nav className="mx-[2.1rem] max-w-screen flex flex-wrap items-center justify-between p-4">
          <a className="flex items-center">
            <span className="self-center text-2xl whitespace-nowrap font-bold">
              STATEMIND
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-red-700 text-base rounded md:bg-transparent md:text-red-700 md:p-0"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-base md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-base md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
                >
                  CLASS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-base md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-base md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
                >
                  TRAINER
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-base md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
                >
                  REVIEW
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-base md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-base md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="w-[95%] mx-auto px-[1.2rem] pt-52 pb-64">
          <header className="mb-8">
            <h1 className="text-[1.15rem] text-4xl font-bold">I help you achieve all your goals</h1>
          </header>
          <article className="mb-8">
            <p className="text-xl">You do not have to be the best to start, you have to start to be the best.</p>
          </article>
          <button className="rounded-md bg-red-600 px-4 py-[0.8rem] mr-6">Start now</button>
          <button className="rounded-md border px-4 py-3">Details</button>
        </section>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-6 gap-4 w-[95%] mx-auto px-[2rem] pt-20 pb-20 sm:space-x-10">
        <img className="w-90 col-span-2" src="https://36580daefdd0e4c6740b-4fe617358557d0f7b1aac6516479e176.ssl.cf1.rackcdn.com/content/contact.31.1658330528.png"></img>
        <article className="col-span-3">
          <header className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl font-bold">
            ABOUT US
          </header>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis sapiente, ad maiores aspernatur laboriosam magni ducimus sint nihil. Debitis temporibus deleniti ipsam quam suscipit quod ab aperiam ut dolore quo!</p>
        </article>
      </section>

    </>
  )
}

export default App
