import Image from 'next/image'
export default function TopSelling(){
    return(
        <section className="px-10 py-20">
            <h2 className="text-white text-4xl font-bold text-center mb-10">Our Top Selling Plants </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative bg-white/5 rounded-[40px] border border-white/10 p-4 flex flex-col items-center gap-4">
                <div className="relative w-[250px] h-[250px]">
                    <Image
                    src="/images/aglaonema.png"
                    alt="aglaonema plant"
                    fill
                    className="object-contain"
                    />
                </div>
                <p className="text-white/75 text-xl">Aglonema Plant</p>
                <p className="text-white text-xl font-semibold">Rs. 500/-</p>
                <button className="px-6 py-2 bg-white/75 text-black rounded-xl">Explore</button>
                </div>

                  <div className="relative bg-white/5 rounded-[40px] border border-white/10 p-4 flex flex-col items-center gap-4">
                <div className="relative w-[250px] h-[250px]">
                    <Image
                    src="/images/trending-plant-1.png"
                    alt="plant 2"
                    fill
                    className="object-contain"
                    />
                </div>
                <p className="text-white/75 text-xl">Desk Plant</p>
                <p className="text-white text-xl font-semibold">Rs. 400/-</p>
                <button className="px-6 py-2 bg-white/75 text-black rounded-xl">Explore</button>
                </div>

                  <div className="relative bg-white/5 rounded-[40px] border border-white/10 p-4 flex flex-col items-center gap-4">
                <div className="relative w-[250px] h-[250px]">
                    <Image
                    src="/images/cactus.png"
                    alt="cactus plant"
                    fill
                    className="object-contain"
                    />
                </div>
                <p className="text-white/75 text-xl">Cactus Plant</p>
                <p className="text-white text-xl font-semibold">Rs. 300/-</p>
                <button className="px-6 py-2 bg-white/75 text-black rounded-xl">Explore</button>
                </div>
                
                







            </div>
        </section>
    )
}