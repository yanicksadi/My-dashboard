
function LearnMore(){
 
    return(
    <div className="border-t border-gray-200 mx-10 flex flex-col items">
    <h1 class="text-5xl font-medium font-serif mt-20 text-center">Connect with us</h1>

    <p class="text-center text-green-700 my-10 text-base text-wrap">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage. </p>
    <div class="flex justify-center">
     <button className="md:inline-flex gap-2 px-96 py-4 ml-20 text-white bg-[#485C11] rounded-full font-semibold transition duration-300 ease-in-out hover:bg-[#8FA36B] ">
          Learn More
          <div className="rotate-45 transition group-hover:translate-x-1">&uarr;</div>
        </button>
  </div>

  </div>
  )
  }


export default LearnMore