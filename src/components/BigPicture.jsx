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
]
return(
  <div>
    <div className="w-1/2 border-gray-300 border-t-gray-400 mb-20">
    <p className="text-5xl font-medium font-serif">See the Big Picture</p>

    </div>
  </div>
)
}

export default BigPicture;