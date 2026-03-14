function Navbar(){
  return(
    <header>
      <nav className="relative container flex justify-between p-6 items-center">
        <p className="text-[32px] font-semibold">Area</p>
        <div className="fixed left-0 right-0 z[999] mx-auto w-max space-x-6 font-semibold rounded-full bg-transparent p-5 backdrop-blur">
          <a href='#' className="hover:text-blue-400">Benefits</a>
          <a href='#' className="hover:text-blue-400">Specifications</a>
          <a href='#' className="hover:text-blue-400"> How-to</a>
          <a href='#' className="hover:text-blue-400">Contact Us</a>
        </div>
        <button class="hidden md:inline-flex items-center gap-2 px-6 py-2 text-white bg-red-900 rounded-full font-semibold transition duration-300 ease-in-out hover:bg-[#8FA36B] ">
          Learn More
          <div class="rotate-45 transition group-hover:translate-x-1">&uarr;</div>
        </button>
      </nav>
    </header>
  )
}
export default Navbar;