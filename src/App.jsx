
import Banner from './Components/HomePage/Banner/Banner'
import Cards from './Components/HomePage/Cards/Cards'
import EventBanner from './Components/HomePage/EventBanner/EventBanner'
import Events from './Components/HomePage/Events/Events'
import Scanner from './Components/HomePage/Scanner/Scanner'
import TIcketing from './Components/HomePage/TIcketing/TIcketing'
import Footer from './Components/Shared/Footer/Footer'
import Navber from './Components/Shared/Navber/Navber'

function App() {

  return (
    <>
     <Navber/>
     <Banner/>
     <Events/>
     <Cards/>
     <EventBanner/>
     <Scanner/>
     <TIcketing/>
     <Footer/>
    </>
  )
}

export default App
