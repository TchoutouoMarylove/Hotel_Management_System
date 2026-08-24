import { Homecontent } from "../components/HomeComponents/Homecontent";
import { Nav } from "../components/NavComponent/Nav";
import finalhomepic from "../assets/images/finalhomepic2.webp";
const HomePage = () => {
  return(
    <div id="home" className="min-h-screen bg-black  flex justify-center items-center">
   

      <div className="">
        <img src={finalhomepic} alt="" className='w-full h-140 opacity-50 absolute inset-0 object-cover' />
        
          <Nav/>

        <Homecontent/>


          
        
      </div>



    
    </div>
  )
}
export default HomePage;