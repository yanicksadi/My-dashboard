import { heroImage } from "../assets/images"


function MapSuccess() {
  const steps = [
  {
  
    id: 1,
    number: "01",
    title: "Get Started",
    description:"With our intuitive setup, you’re up and running in minutes."
  
  },
  {
  
    id: 2,  
    number: "02",
    title: "Customize and Configure",
    description: "Adapt Area to your specific requirements and preferences."
  
  },
  {
  
      id: 3,
    number: "03",
    title: "Grow Your Business",
    description: "Make informed decisions to exceed your goals."
    
  } 
  ]

  return (
    <div className="border-t border-gray-200 mb-20 mx-10">
      <div className="flex justify-between my-16">
      <p className="text-5xl font-medium font-serif ">Map Your Success</p>
      <a href="#" class="items-center gap-2 px-5 py-4 text-black bg-[#DFECC6] rounded-full font-bold transition duration-300 ease-in-out hover:bg-[#8FA36B]">Discover More
        </a>
        </div>
        <div className="flex-1 flex mt-10">
          {steps.map((step)=> (
            <div key={step.id} className="flex-1 my-4 p-10">
              <div className="border-t border-gray-200 text-[#929292] flex-col text-6xl scale-125 transform font-sans py-10 mx-5">{step.number}</div>
              <div className="-ml-5 font-medium font-serif mt-10">{step.title}</div>
              <div className="text-green-700 my-5 -ml-5 text-sm">{step.description}</div>
            </div>
          ))}
        </div>
        <div>
          <img src={heroImage} className="w-full mt-10"/>
        </div>
    </div>
  )
}

export default MapSuccess
