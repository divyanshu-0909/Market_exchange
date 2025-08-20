import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'

const LandingPage = () => {
  return (
    <div className='w-[100vw] bg-slate-100 h-full '>
        <Navbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default LandingPage