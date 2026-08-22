import { TheHotel } from "./pages/TheHotel"
import HomePage from "./pages/Home"
import { Room } from "./pages/Room"
import { Services } from "./pages/Services"
import { ContactPage } from "./pages/ContactPage"
import { Map } from "./pages/map"
function App() {
  return (
    <div className="h-screen ">


     <HomePage/>
     <TheHotel/>
     <Room/>
     <Services/>
     <Map/>

   <ContactPage/>

    </div>
  )
}

export default App