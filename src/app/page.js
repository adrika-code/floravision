import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import TrendingPlants from '@/components/TrendingPlants'
import TopSelling from '@/components/TopSelling'
import ReviewsSection from '@/components/ReviewsSection'
import Plantss from '@/components/plantss'
import Footer from '@/components/Footer'
export default function Home(){
  return(
    <main>
      <Navbar/>
      <HeroBanner/>
      <TrendingPlants/>
      <TopSelling />
      <ReviewsSection />
      <Plantss />
      <Footer />
    </main>
  )
}