import Image from 'next/image'

export default function TrendingPlants(){
    return(
        <section className="px-10 py-20">
        <h2 className="text-white text-4xl font-bold text-center mb-10">
                Our Trendy Plants
            </h2>
            <div className="flex flex-col gap-6">

          <div className="flex items-center gap-6 bg-white/5 rounded-[60px] p-6 border border-white/10">
                    <div className="relative w-[300px] h-[300px] shrink-0">
                        <Image
                        src="/images/trending-plant-1.png"
                        alt="desk plant"
                        fill
                        className="object-contain"
                        />
                    </div>
        <div className="flex flex-col gap-4">
                        <h3 className="text-white text-3xl font-semibold">For Your Desks Decorations</h3>
                        <p className="text-white/75 text-lg">I recently added a beautiful desk decoration plant to my workplace, and it has made such a positive difference!</p>
         <p className="text-white text-2xl font-semibold">Rs. 599/-</p>
                        <button className="w-fit px-6 py-2 bg-white/75 text-black rounded-xl">Explore</button>
                    </div>
                </div>

                <div className="flex items-center gap-6 bg-white/5 rounded-[60px] p-6 border border-white/10">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white text-3xl font-semibold">For Your Desks Decorations</h3>
                        <p className="text-white/75 text-lg">The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.</p>
                        <p className="text-white text-2xl font-semibold">Rs. 399/-</p>
                        <button className="w-fit px-6 py-2 bg-white/75 text-black rounded-xl">Explore</button>
                    </div>
            <div className="relative w-[300px] h-[300px] shrink-0 ml-auto">
                        <Image
                        src="/images/trending-plant-2.png"
                        alt="desk plant 2"
                        fill
                        className="object-contain"
                        />
            </div>
         </div>

     </div>
        </section>
    )
}