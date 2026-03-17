import { testimonialImage } from "../assets/images"

function Testimonial (){
  return (
    <div className="flex mt-40 gap-10 mx-10 ">
      <div class="flex">
        <img src={testimonialImage} class="rounded-3xl w-[700px]"/>
      </div>
      <div className="flex-col w-1/2 border-gray-300 border-t pb-10"> 
        <p className="text-4xl font-medium font-serif mt-36">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</p>
        <p class="mt-20 mb-4 text-sm font-medium">John Smith</p>
        <div>
          <p class="text-[#485C11] text-xs">Head of Data</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
