import { cableIcon, globalIcon, accountIcon, chartIcon, mountain } from '../assets/images'

function Benefits() {
  return (
    <div className="px-20 mx-10">
      <div>
        <p className="text-green-700 mt-10 text-sm">Benefits</p>
        <h1 className="text-4xl font-medium font-serif mt-5 px-4 py-4">
          We've cracked the code.
        </h1>
        <p className="text-green-700 mt-10 text-sm block">
          Area provides real insights, without the data overload.
        </p>
      </div>

      <div className="container flex flex-row py-20 gap-20">
        <div className="flex-1">
          <hr className="border-gray-400 my-4" />
          <img src={cableIcon} className="p-5" alt="Amplify Insights" />
          <h1 className="text-xl font-medium font-serif">Amplify Insights</h1>
          <p className="text-green-700 mt-5 text-sm block">
            Unlock data-driven decisions with comprehensive analytics, revealing key 
            opportunities for strategic regional growth.
          </p>
        </div>

        <div className="flex-1">
          <hr className="border-gray-400 my-4" />
          <img src={globalIcon} className="p-5" alt="Control Your Global Presence" />
          <h1 className="text-xl font-medium font-serif">Control Your Global Presence</h1>
          <p className="text-green-700 mt-5 text-sm block">
            Manage and track satellite offices, ensuring consistent performance and 
            streamlined operations everywhere.
          </p>
        </div>

        <div className="flex-1">
          <hr className="border-gray-400 my-4" />
          <img src={accountIcon} className="p-5" alt="Remove Language Barriers" />
          <h1 className="text-xl font-medium font-serif">Remove Language Barriers</h1>
          <p className="text-green-700 mt-5 text-sm block">
            Adapt to diverse markets with built-in localization for clear communication 
            and enhanced user experience.
          </p>
        </div>

        <div className="flex-1">
          <hr className="border-gray-400 my-4" />
          <img src={chartIcon} className="p-5" alt="Visualize Growth" />
          <h1 className="text-xl font-medium font-serif">Visualize Growth</h1>
          <p className="text-green-700 mt-5 text-sm block">
            Generate precise, visually compelling reports that illustrate your growth 
            trajectories across all regions.
          </p>
        </div>
      </div>

      <div>
        <img 
          src={mountain} 
          alt="Mountain landscape" 
          className="rounded-3xl size-auto w-full h-[620px] p-4 object-cover"
        />
      </div>
    </div>
  )
}

export default Benefits