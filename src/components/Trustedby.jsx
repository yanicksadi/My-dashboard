// src/components/TrustedBy.jsx
import { logo1, logo2, logo3, logo4, logo5, logo6 } from '../assets/images'

function Trustedby() {
  return (
    <div className="mx-10">
      <p className="text-green-700 mt-2">Trusted by:</p>
      <div className="flex space-x-20 items-center p-10 gap-10 md:flex-row flex-wrap">
        <img src={logo1} alt="Trusted company 1" className="w-24" />
        <img src={logo2} alt="Trusted company 2" className="w-24" />
        <img src={logo3} alt="Trusted company 3" className="w-24" />
        <img src={logo4} alt="Trusted company 4" className="w-24" />
        <img src={logo5} alt="Trusted company 5" className="w-24" />
        <img src={logo6} alt="Trusted company 6" className="w-24" />
      </div>
      <hr className="border-gray-400 mt-10" />
    </div>
  )
}

export default Trustedby