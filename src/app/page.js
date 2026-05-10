import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import TrendingPlants from '@/components/TrendingPlants'
import TopSelling from '@/components/TopSelling'
export default function Home(){
  return(
    <main>
      <Navbar/>
      <HeroBanner/>
      <TrendingPlants/>
      <TopSelling />
    </main>
  )
}