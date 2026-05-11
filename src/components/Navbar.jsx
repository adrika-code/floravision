export default function Navbar(){
    return(
        <nav className="w-full flex items-center justify-between px-10 py-4">
            <div className="flex items-center gap-2">
                <span className="text-3xl">🪴</span>
                <span className="text-white font-black text-3xl opacity-75">FloraVision.</span>
            </div>
            <div className="hidden md:flex gap-10 text-white text-lg">
                <a href="#">Home</a>
                 <a href="#">Plants Type</a>
                  <a href="#">More</a>
                   <a href="#">Contact</a>
                   </div>
                   <div className="flex items-center gap-6">
                    <button className="text-white opacity-75">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                        </svg>
                    </button>
                    <button className="text-white opacity-75">
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                        </svg>

                    </button>
                    <button className="flex flex-col gap-1.5 md:flex">
                        <span className="block w-8 h-1 bg-white rounded"></span>
                        <span className="block w-6 h-1 bg-white rounded"></span>
                    </button>
                   </div>
        </nav>
    )
}