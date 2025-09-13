import Productshowcase from '@/components/sections/Productshowcase'
import Features from '@/components/sections/Features'
import Reviews from '@/components/sections/Reviews'
import Pricing from '@/components/sections/Pricing'
import Cta from '@/components/sections/Cta'
import Contact from '@/components/sections/Contact'

export default function PropertyDetailPage() {
  return (
    <>
      <Productshowcase />
      <Features />
      <Reviews />
      <Pricing />
      <Cta />
      <Contact />
    </>
  )
}