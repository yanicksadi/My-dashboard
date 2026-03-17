import { footerLogo } from "../assets/images"

function Footer() {
  return (
  <div className="border-t border-gray-200 mt-24 mx-10">
    <div className="flex gap-4 my-10 font-bold space-x-2 text-sm ">
    <p href='#' className="hover:text-blue-400">Benefits</p>
    <p href='#' className="hover:text-blue-400">Specifications</p>
    <a href='#' className="hover:text-blue-400"> How-to</a>
  </div>
  <div className="flex items-end my-20  justify-between">
    <div className="flex items-end gap-10">
      <img src={footerLogo} />
    <p className="leading-none text-gray-500 text-xs">&#169; Area .  <span className="ml-5">2025</span></p>
    </div>
    
   <p className="leading-none text-gray-500 text-xs">All Rights Reserved</p>
   </div>
     
  </div>
  )
}

export default Footer