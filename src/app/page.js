import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import TrendingPlants from '@/components/TrendingPlants'
export default function Home(){
  return(
    <main>
      <Navbar/>
      <HeroBanner/>
      <TrendingPlants/>
    </main>
  )
}