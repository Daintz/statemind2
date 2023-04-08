import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navigation () {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = 650

      setIsScroll(scrollPosition > threshold)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`max-w-screen flex flex-wrap items-center justify-between px-12 py-4 sticky top-0 navbar-text ${isScroll ? 'text-black bg-white shadow-lg' : 'text-white'}`} >
        <Link className="flex items-center" to="/">
          <span className="self-center text-2xl whitespace-nowrap font-bold">
            STATEMIND
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 ml-3 text-sm rounded-lg border border-transparent hover:border-gray-200 lg:hidden hover:bg-red-600 ${isScroll ? 'text-black' : 'text-white'}`}
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
        <div className="hidden w-full lgm:absolute lgm:px-10 lgm:top-16 lgm:inset-0 lg:block lg:w-auto" id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 lg:p-0 mt-4 border text-black bg-white border-black rounded-lg lg:bg-transparent lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 ${isScroll ? 'lg:text-black' : 'lg:text-white'}`}>
            <li>
              <a
                className="block py-2 pl-3 pr-4 rounded text-base lg:p-0 border border-transparent lgm:hover:border-black lgm:lgm:hover:bg-red-700 lg:hover:text-red-700"
                href="#home"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 rounded text-base lg:p-0 border border-transparent lgm:hover:border-black lgm:hover:bg-red-700 lg:hover:text-red-700"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#class"
                className="block py-2 pl-3 pr-4 rounded text-base lg:p-0 border border-transparent lgm:hover:border-black lgm:hover:bg-red-700 lg:hover:text-red-700"
              >
                CLASSES
              </a>
            </li>
            <li>
              <a
                href="#trainer"
                className="block py-2 pl-3 pr-4 rounded text-base lg:p-0 border border-transparent lgm:hover:border-black lgm:hover:bg-red-700 lg:hover:text-red-700"
              >
                TRAINER
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 pl-3 pr-4 rounded text-base lg:p-0 border border-transparent lgm:hover:border-black lgm:hover:bg-red-700 lg:hover:text-red-700"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 rounded text-base lg:p-0 border border-transparent lgm:hover:border-black lgm:hover:bg-red-700 lg:hover:text-red-700"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navigation
