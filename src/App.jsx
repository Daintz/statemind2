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

    <footer className="bg-white" id="contact">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="gap-8 px-4 py-6 lg:py-8">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">Contact with me</h2>
            <p className="text-gray-600 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque id voluptatem cum blanditiis ex, quae dolorem fugit exercitationem odit iure placeat, eveniet est laboriosam veritatis voluptas explicabo dignissimos quidem? Incidunt.</p>
        </div>
    </div>

    <div className="px-4 py-6 bg-white md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/">STATEMIND™</a>. All Rights Reserved.
        </span>
        <div className="sm:flex mt-4 sm:space-x-6 sm:justify-center sm:mt-0">
          <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
            Facebook
          </button>
          <button type="button" className="text-white bg-[#000000] hover:bg-[#0e0e0e]/90 focus:ring-4 focus:outline-none focus:ring-[#0e0e0e]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
            Instagram
          </button>
          <button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
            <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
            Twitter
          </button>
        </div>
      </div>
    </div>
</footer>

    </>
  )
}

export default App
