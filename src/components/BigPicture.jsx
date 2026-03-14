// src/components/BigPicture.jsx
import { featuresCarousel } from '../assets/images'

function BigPicture() {
  // Data for the numbered items
  const features = [
    {
      number: "01",
      text: "Spot Trends in Seconds: No more digging through numbers."
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

  return (
    <div className="container flex my-20 gap-10 mx-10">
      <div className="w-1/2">
        <hr className="border-gray-300 border-t-gray-400 mb-20" />
        
        <p className="text-5xl font-medium font-serif">See the Big Picture</p>
        
        <p className="text-green-700 my-10 text-sm">
          Area turns your data into clear, vibrant visuals that show you exactly 
          what's happening in each region.
        </p>
        {features.map((feature, index) => (
          <div key={index}>
            <hr className="border-gray-300 border-t-gray-400" />
            <div className="flex items-center mt-5 gap-5">
              <span className="text-green-600 font-bold text-xl">{feature.number}</span>
              <p className="text-sm">{feature.text}</p>
            </div>
          </div>
        ))}

        <hr className="border-gray-300 border-t-gray-400 my-5" />

        <div className="mt-10">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-5 py-4 text-black bg-[#DFECC6] rounded-full font-bold transition duration-300 ease-in-out hover:bg-[#8FA36B]"
          >
            Discover More
          </a>
        </div>
      </div>

      <div className="w-1/2">
        <img 
          src={featuresCarousel} 
          alt="Features carousel showing dashboard interface" 
          className="rounded-sm w-full"
        />
      </div>
    </div>
  )
}

export default BigPicture