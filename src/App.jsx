import { Link } from 'react-router-dom'

function App () {
  return (
    <>
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
          <Link to="/singup" className="rounded-md bg-red-600 px-4 py-[0.8rem] mr-6">
            Start now
          </Link>
          <Link to="/singin" className="rounded-md bg-white text-black px-4 py-[0.8rem] mr-6">
            Sign In
          </Link>
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
                  <img className="rounded-t-lg h-80 mx-auto" src="/img/fitness.png" alt="image mindset" />
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
          className="col-start-5 col-end-7 !ml-0"
          src="https://img.freepik.com/foto-gratis/peso-saludable-cuidado-masculino-atletico_1139-695.jpg"
        ></img>
      </section>

      <section className="class w-[100%] px-[2rem] pt-28 pb-28" id="services">
        <header className="text-center text-black text-5xl font-bold mb-20">
          SERVICES
        </header>
        <article className="justify-items-center justify-center gap-4 w-[100%] px-[10%] md:px-[20%]">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow mb-6 sm:py-8 sm:mb-0">
              <h5 className="mb-4 text-xl font-medium text-gray-500">Join our community</h5>
              <div className="flex items-baseline text-gray-900">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">100</span>
                  <span className="ml-1 text-xl font-normal text-gray-500">/month</span>
              </div>

              <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">

                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Access to all the platforms where our community shares their victories</span>
                  </li>
                  <li className="flex space-x-3">

                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Live mentoring with me and the community</span>
                  </li>
                  <li className="flex space-x-3">

                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">Fitness consulting</span>
                  </li>
                  <li className="flex space-x-3">

                      <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      <span className="text-base font-normal leading-tight text-gray-500">I teach you to increase your income</span>
                  </li>
              </ul>
              <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Start to be a winner</button>
          </div>
        </article>
      </section>

      <div className="bg-white mx-auto w-full max-w-screen" id="contact">
        <div className="gap-8 px-[10%] py-6 lg:py-8">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">
              Contact with me
            </h2>
            <p className="text-gray-600 font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque id voluptatem cum blanditiis ex, quae dolorem fugit
              exercitationem odit iure placeat, eveniet est laboriosam veritatis
              voluptas explicabo dignissimos quidem? Incidunt.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
