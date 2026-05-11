export default function ReviewsSection(){
    return(
     <section className="px-10 py-20">
     <h2 className="text-white text-4xl font-bold text-center mb-10">
        What Our Customers Say
         </h2>
     <div className="grid grid-cols-3 gap-6">

 <div className="bg-white/5 rounded-[40px] border border-white/20 p-8 flex flex-col gap-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
         <div className="w-16 h-16 rounded-full bg-white/20"></div>
         <div>
         <p className="text-white font-semibold text-2xl">Shelly Russell</p>
         <p className="text-yellow-300 text-lg">★★★★★</p>
             </div>
          </div>
          <p className="text-white/75 text-lg">
            Just got my hands on some absolutely awesome plants, and I couldn't be happier!
           </p>
          </div>

          <div className="bg-white/5 rounded-[40px] border border-white/20 p-8 flex flex-col gap-4 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20"></div>
                   <div>
  <p className="text-white font-semibold text-2xl">Lula Rolfson</p>
        <p className="text-yellow-300 text-lg">★★★★★</p>
                 </div>
                 </div>
        <p className="text-white/75 text-lg">
                        Each one has its own unique charm and personality, and they've already started brightening up my space.
                    </p>
       </div>

         <div className="bg-white/5 rounded-[40px] border border-white/20 p-8 flex flex-col gap-4 backdrop-blur-sm">
         <div className="flex items-center gap-4">
         <div className="w-16 h-16 rounded-full bg-white/20"></div>
                <div>
                            <p className="text-white font-semibold text-2xl">Carol Huels</p>
                            <p className="text-yellow-300 text-lg">★★★★★</p>
                        </div>
                    </div>
                    <p className="text-white/75 text-lg">
                        It's like bringing a little piece of nature indoors. Definitely worth the investment!
                    </p>
                </div>

            </div>
        </section>
    )
}