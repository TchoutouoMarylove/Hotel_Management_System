import { Homecontent } from "../components/Homecontent";
import { Nav } from "../components/Nav";
import finalhomepic from "../assets/images/finalhomepic2.webp";
const HomePage = () => {
  return(
    <div className="min-h-screen bg-black  flex justify-center items-center">
   

      <div className="">
        <img src={finalhomepic} alt="" className='w-full h-140 opacity-50 absolute inset-0 object-cover' />
        
          <Nav/>

        <Homecontent/>


          
        
      </div>



    
    </div>
  )
}
export default HomePage;