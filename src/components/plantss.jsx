import Image from 'next/image'
export default function Plantss(){
    return(
        <section className="px-10 py-20">
            <div className="flex items-center justify-between bg-white/5 rounded-[60px] border border-white/10 p-10">
            <div className="relative w-[400px] h-[400px]">
                <Image
                src="/images/aglaonema.png"
                alt="o2 plant"
                fill 
                className="object-contain"
                />

            </div>
            <div className="flex flex-col gap-6 max-w-lg">
                <h2 className="text-white/75 text-4xl font-semibold">
                We Have Small And Best O2 Plants Collection's</h2>
                <p className="text-white/75 text-xl">
                Oxygen producing plants, often referred as "O2 plants,"
                are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
                <button className="w-fit px-8 py-3 bg-white/75 text-black rounded-xl text-xl">Explore</button>
        
            </div>
            </div>
        </section>
    )
    
}