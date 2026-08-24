 import { Link } from "react-router-dom"
 export const Homecontent=()=>{
  return(
    <div>

  <div className="flex flex-col justify-center items-center mt-20">
         <div className="flex flex-col justify-center items-center text-white text-7xl font-serif mb-10">
        <p className="mb-15">Where Every Stay Becomes</p>
          
          <p className="mb-5">A Cherished Memory</p>
           <p className="text-[17px] text-yellow-500">experience the art of exceptional living</p>

           
        </div>
       <div className="text-white text-xl flex gap-4 font-bold hover:cursor-pointer">
         <Link to="/order" className="bg-yellow-500 w-40 h-12 rounded-xl flex justify-center items-center relative z-50" >
     Book Now
      
    </Link>
         <Link to="/ContactPage" className="bg-yellow-500 w-40 h-12 rounded-xl flex justify-center items-center relative z-50" >
     Contact Us
      
    </Link>
       
       </div>
       </div>


    </div>
  )
}