import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Order } from "./pages/Order";
import { TheHotel } from "./pages/TheHotel"
import HomePage from "./pages/Home"
import { Room } from "./pages/Room"
import { Services } from "./pages/About"
import { ContactPage } from "./pages/ContactPage"
import { Map } from "./pages/map"
import { Testimonial } from "./pages/Testimonial"
function App() {
  return (
    <div className="h-screen ">
      <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <HomePage />
              <TheHotel />
              <Room />
              <Services />
              <Map />
              <Testimonial />
              <ContactPage />
            </>
          }
        />

        <Route path="/order" element={<Order />} />

      </Routes>
    </BrowserRouter>
    
    
     
    

  

    </div>
  )
}

export default App