export default function Footer(){
    return(
        <footer className="px-6 md:px-10 py-16 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between gap-10">
                <div className="flex flex-col gap-4 max-w-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-3xl">🌿</span>
                        <span className="text-white font-black text-3xl opacity-75">FloraVision.</span>
                    </div>
                    <p className="text-white text-lg">
                        From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive.
                    </p>
                    <div className="flex gap-4 text-white font-extrabold text-xl">
                        <span>FB</span>
                        <span>TW</span>
                        <span>LI</span>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-extrabold text-2xl">Quick Links</h3>
                    <a href="#" className="text-white underline text-xl">Home</a>
                    <a href="#" className="text-white underline text-xl">Type's Of plant's</a>
                    <a href="#" className="text-white underline text-xl">Contact</a>
                    <a href="#" className="text-white underline text-xl">Privacy</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-extrabold text-2xl">For Every Update</h3>
                    <input
                    type="email"
                    placeholder="Enter Email"
                    className="bg-transparent border-2 border-white text-white px-6 py-4 rounded-lg text-xl w-72"
                    />
                </div>
            </div>
            <p className="text-white text-xl mt-10 text-center">
                FloraVision © all right reserve
            </p>
        </footer>
    )
}