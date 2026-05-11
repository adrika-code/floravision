import Image from 'next/image'

export default function HeroBanner(){
    return(
        <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center px-6 md:px-10 pt-24">
            <div className="flex flex-col gap-6 max-w-lg">
                <h1 className="text-white text-7xl font-bold">Earth's Exhale</h1>
                <p className=" text-white opacity-75 text-xl max-w-lg">"Earth's Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life. </p>
            <div className= "flex items-center gap-4 mt-4">
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:opacity-90 transition">Buy Now</button>
                <button className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-full hover:opacity-75 transition">
                <span>▶</span>
                <span>Live Demo</span>
                </button>
            </div>
            </div>
            <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
                <Image
                src="/images/hero-bg-plant.jpg"
                alt="hero plant"
                fill 
                className="object-contain"
                />
            </div>

        </section>
    )
}
