import {featuresCarousel} from '../assets/images'

function BigPicture(){
  const features = [
  {
    number: "01",
    text: "Spot trends in Seconds: No more digging through numbers."
  },
  {
    number: "02",
    text: "Get Everyone on the Same Page: Share easy-to-understand reports with your team."
  },
  {
    number: "03",
    text: "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged."
  },
  {
    number: "04",
    text: "Your Global Snapshot: Get a quick, clear overview of your entire operation."
  }
]
return(
  <div className="container mt-20 flex gap-10 border-t-gray-400 mb-20 px-10 my-10">
    
    <div className="border-t border-t-gray-200 py-10">
     
      <p className="text-5xl font-medium font-serif">See the Big Picture</p>
    <p className="text-green-700 my-10 text-sm">Area turns your data into clear, vibrant visuals that show you exactly 
          what's happening in each region.</p>

    
    {features.map((feature, index) => (
      <div key={index}>
        <div className="flex items-center mt-5 border-t border-t-gray-200">
          <span className="text-green-600 font-bold  flex-row items-center p-5 ">
            {feature.number}
          </span>
          <p className="text-sm">{feature.text}</p>
        </div>
      </div>
    ))}
  <div className="mt-10">
      <a class="md:inline-flex items-center gap-2 px-6 py-2 text-black bg-[#DFECC6] rounded-full font-semibold transition duration-300 ease-in-out hover:bg-[#8FA36B] ">Discover More</a>
    </div>
     
  </div>
  <div className="w-1/2">
    <img src={featuresCarousel} alt="features carousel" className="rounded-sm h-[744px] w-[990px]" />
  </div>
</div>
   
)
}

export default BigPicture;