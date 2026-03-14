import stats from "../assets/images/stats.png"

function Hero(){
  return (
    <section className="mx-w-6xl mx-auto px-4 py-10 md:py-24">
      <h1 className="text-9xl font-medium font-serif text-center">
        Browse Everything
      </h1>
      <div className="flex relative justify-center mt-20">
         <div class="absolute bottom-0 bg-[#8FA36B] w-[90vw] h-[300px] rounded-[48px]">    
      </div>
      <div className="relative overflow-hidden bg-black rounded-t-3xl p-4 w-[800px] h-[438px] pb-0">
          <img src={stats} alt="stats dashboard" className="w-full"/>
        </div>
        
      </div>
    </section>
  )
}
export default Hero