import { useEffect, useState } from 'react'

function App () {
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
    <>
      <nav className={`max-w-screen flex flex-wrap items-center justify-between px-12 py-4 sticky top-0 navbar-text ${isScroll ? 'text-black bg-white' : 'text-white'}`} >
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
                className="block py-2 pl-3 pr-4 rounded text-base md:p-0 target:text-red-600 hover:text-red-700"
                href="#home"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 pl-3 pr-4 rounded text-base md:p-0 hover:text-red-700"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#class"
                className="block py-2 pl-3 pr-4 rounded text-base md:p-0 hover:text-red-700"
              >
                CLASS
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 pl-3 pr-4 rounded text-base md:p-0 hover:text-red-700"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#trainer"
                className="block py-2 pl-3 pr-4 rounded text-base md:p-0 hover:text-red-700"
              >
                TRAINER
              </a>
            </li>
            <li>
              <a
                href="#review"
                className="block py-2 pl-3 pr-4 rounded text-base md:p-0 hover:text-red-700"
              >
                REVIEW
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="block py-2 pl-3 pr-4 rounded text-base md:p-0 hover:text-red-700"
              >
                BLOG
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 pl-3 pr-4 rounded text-base md:p-0 hover:text-red-700"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="text-white">
        <section className="w-[100%] px-[3.3rem] pt-52 pb-64">
          <header className="mb-8">
            <h1 className="text-[2rem] text-4xl font-bold">
              I help you achieve all your goals
            </h1>
          </header>
          <article className="mb-8">
            <p className="text-xl">
              You do not have to be the best to start, you have to start to be
              the best.
            </p>
          </article>
          <button className="rounded-md bg-red-600 px-4 py-[0.8rem] mr-6">
            Start now
          </button>
          <button className="rounded-md border px-4 py-3">Details</button>
        </section>
      </header>

      <section className="sm:grid sm:grid-cols-6 gap-4 w-[100%] px-[2rem] pt-28 pb-28 sm:space-x-10 shadow-2xl bg-white" id="about">
        <img
          className="w-90 col-span-2"
          src="https://36580daefdd0e4c6740b-4fe617358557d0f7b1aac6516479e176.ssl.cf1.rackcdn.com/content/contact.31.1658330528.png"
        ></img>
        <article className="col-span-3">
          <header className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl font-bold">
            ABOUT US
          </header>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis sapiente, ad maiores aspernatur laboriosam magni
            ducimus sint nihil. Debitis temporibus deleniti ipsam quam suscipit
            quod ab aperiam ut dolore quo!
          </p>
        </article>
      </section>

      <section className="class w-[100%] px-[2rem] pt-28 pb-28" id="class">
        <header className="text-center text-black text-5xl font-bold mb-10 sm:mb-20">
          CLASSES
        </header>
        <article className="sm:grid sm:grid-cols-2 lg:grid-cols-3 md:justify-items-center justify-center gap-4 w-[100%]">
          <div className="sm:col-span-1 max-w-sm bg-white border border-black-200 rounded-lg shadow mb-6 sm:mb-0">
              <a href="#">
                  <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1266581983/vector/personal-growth-tiny-man-watering-that-growing-plant-from-the-brain-as-metaphor-growth.jpg?s=612x612&w=0&k=20&c=teQvwe7NfK874P6mB2TtIcYcdqlLNQgx-2XsrJGuSDU=" alt="image mindset" />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">MINDSET</h5>
                  </a>
                  <p className="mb-3 font-normal text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi beatae pariatur doloremque dolore, quis animi porro dolores accusamus, error in consequatur omnis quaerat expedita, consequuntur cupiditate? Sed dolorum perspiciatis dolores.</p>

              </div>
          </div>
          <div className="sm:col-span-1 max-w-sm bg-white border border-black-200 rounded-lg shadow mb-6 sm:mb-0">
              <a href="#">
                  <img className="rounded-t-lg h-80 mx-auto" src="public/img/fitness.png" alt="image mindset" />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">FITNESS</h5>
                  </a>
                  <p className="mb-3 font-normal text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi beatae pariatur doloremque dolore, quis animi porro dolores accusamus, error in consequatur omnis quaerat expedita, consequuntur cupiditate? Sed dolorum perspiciatis dolores.</p>

              </div>
          </div>
          <div className="sm:col-span-1 max-w-sm bg-white border border-black-200 rounded-lg shadow">
              <a href="#">
                  <img className="rounded-t-lg" src="https://media.istockphoto.com/id/1266581983/vector/personal-growth-tiny-man-watering-that-growing-plant-from-the-brain-as-metaphor-growth.jpg?s=612x612&w=0&k=20&c=teQvwe7NfK874P6mB2TtIcYcdqlLNQgx-2XsrJGuSDU=" alt="image mindset" />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">MINDSET</h5>
                  </a>
                  <p className="mb-3 font-normal text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi beatae pariatur doloremque dolore, quis animi porro dolores accusamus, error in consequatur omnis quaerat expedita, consequuntur cupiditate? Sed dolorum perspiciatis dolores.</p>

              </div>
          </div>
        </article>
      </section>

      <section className="sm:grid sm:grid-cols-6 gap-4 w-[100%] px-[2rem] pt-28 pb-28 sm:space-x-10 shadow-2xl bg-white" id="trainer">
        <article className="col-start-2 col-end-5">
          <header className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl font-bold">
            TRAINER
          </header>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis sapiente, ad maiores aspernatur laboriosam magni
            ducimus sint nihil. Debitis temporibus deleniti ipsam quam suscipit
            quod ab aperiam ut dolore quo!
          </p>
        </article>
        <img
          className="w-90 col-start-5 col-end-7"
          src="https://36580daefdd0e4c6740b-4fe617358557d0f7b1aac6516479e176.ssl.cf1.rackcdn.com/content/contact.31.1658330528.png"
        ></img>
      </section>

      <section className="class w-[100%] px-[2rem] pt-28 pb-28" id="class">
        <header className="text-center text-black text-5xl font-bold mb-20">
          SERVICES
        </header>
        <article className="justify-items-center justify-center gap-4 w-[100%] px-[10%] md:px-[20%]">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow mb-6 sm:py-8 sm:mb-0">
              <h5 className="mb-4 text-xl font-medium text-gray-500"> ========= </h5>
              <div className="flex items-baseline text-gray-900">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">100</span>
                  <span className="ml-1 text-xl font-normal text-gray-500">/month</span>
              </div>

              <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">

                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500"> ========= </span>
                  </li>
                  <li className="flex space-x-3 line-through decoration-gray-500">

                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500"> ========= </span>
                  </li>
              </ul>
              <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
          </div>
        </article>
      </section>
    </>
  )
}

export default App
