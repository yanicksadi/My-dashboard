
import { CheckIcon } from '../assets/images/index'
import { CloseIcon } from '../assets/images/index'



function ComparisonTable() {
  return (
      <div className="max-w-full mt-24 bg-white mx-10">
        <table className="w-full text-lg">
          <thead>
            <tr>
              <th className="text-center text-2xl font-semibold py-6 px-6 border shadow-lg rounded-t-lg">Area</th>
              <th className="text-center border-b border-gray-700 text-xl font-semibold text-gray-500">WebSurge</th>
              <th className="text-center text-xl font-semibold text-gray-500 border-b border-gray-700"> HyperView</th>
            </tr>
          </thead>

          <tbody className="text-[12px]">

            <tr className="border-b border-gray-200">
              <td className="p-5 text-left border border-t-gray-700">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Ultra-fast browsing</td>
              <td className="py-6 px-6 text-left border">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Fast Browsing</td>
              <td className="py-6 px-6 text-left" >
                <img src={CloseIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Moderate Speed</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-6 px-6 text-left border">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Advanced AI insights</td>
              <td className="py-6 px-6 text-left border">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Basic AI recommendations</td>
              <td className="py-6 px-6 text-left">
                <img src={CloseIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> No AI Assistance</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-6 px-6 text-left border">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Seamless integration</td>
              <td className="py-6 px-6 text-left border">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Restricts customization</td>
              <td className="py-6 px-6 text-left ">
                <img src={CloseIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Steep Learning Curve</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-6 px-6 text-left border gap-10">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Advanced AI insights</td>
              <td className="py-6 px-6 text-left border">
               <img src={CloseIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Basic AI insights</td>
              <td className="py-6 px-6 text-left">
                <img src={CloseIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> No AI Assistance</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-6 px-6 text-left border">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Ultra fast browsing</td>
              <td className="py-6 px-6 text-left border">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Fast browsing</td>
              <td className="px-6 py-6 text-left">
                <img src={CloseIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Moderate Speed</td>
            </tr>
            <tr className="">
              <td className="py-6 px-6 text-left max-w-6xl mx-auto mt-24 rounded-2xl overflow-hidden shadow-lg border ">
                <img src={CheckIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Full UTF-8 support</td>
              <td className="py-6 px-6 text-left border">
                <img src={CloseIcon} alt="Close icon" className="w-3 h-3 inline mr-2"/> Potential display errors</td>
              <td className="py-6 px-6 text-left">
                <img src={CloseIcon} className="w-3 h-3 inline mr-2"/> Partial UTF-8 support</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default ComparisonTable
