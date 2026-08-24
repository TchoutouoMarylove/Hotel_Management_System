import { Calendar,Plus, Minus } from "lucide-react"
import { useState, useEffect } from "react";

export function DateForm({goToCategory}){
  const [adult, setAdult ] = useState(0);
const [teenager, setTeenager ] = useState(0);
const [children, setChildren ] = useState(0);
  
  return (
    <div className="h-95 w-95 bg-[#2E1515] ml-50 mt-5 rounded-xl">
      <div className="text-white p-3">
      <div>Dates</div>
       <div className="border w-full  h-10 rounded-lg flex justify-center items-center mb-7 mt-4 hover:cursor-pointer" >
        <Calendar size={25}/>
  <input
    type="date"
    className="bg-transparent outline-none ml-2 w-full"
  />

       </div>
       <div className="flex gap-4 mb-10">
        
       <div>
        <div className="mb-2"> Adults</div>
         <div className="border h-10 w-38 rounded-lg flex justify-between items-center p-1">
          <button 
        onClick={() => setAdult(Math.max(0,adult -1))}
          className="hover:cursor-pointer"  ><Minus/></button>
         <div>{adult}</div>
         <button  onClick={() => setAdult(adult +1)}
          className="hover:cursor-pointer"
          ><Plus /></button>
         
        </div>
       </div>
   <div>
     <div className="mb-2">Teenager (13-17 yrs)</div>
     <div className="border h-10 w-38 rounded-lg flex justify-between items-center p-1">
<button  
className="hover:cursor-pointer"
        onClick={() => setTeenager(Math.max(0,teenager-1))}
        ><Minus/></button>
         <div>{teenager}</div>
         <button 
         className="hover:cursor-pointer"
         onClick={() => setTeenager(teenager + 1)}><Plus /></button>
      
        </div>
       </div>
   </div>
      <div className="mb-5"> 
         <div className="mb-2">Children (0 -12 yrs)</div>
       <div className="border h-10 w-38 rounded-lg flex justify-between items-center p-1">
        <button 
        className="hover:cursor-pointer"
        onClick={() => setChildren(Math.max(0,children -1))}
        ><Minus/></button>
         <div>{children}</div>
         <button 
         className="hover:cursor-pointer"
         onClick={() => setChildren(children+1)}><Plus /></button>
        </div>
      </div>
    <button className="bg-yellow-500 h-12 w-full rounded-lg flex justify-center items-center text-xl text-[#3B2720] font-bold hover:bg-yellow-400 hover:cursor-pointer hover: delay-0.7s"
    onClick={goToCategory}
    >
      Next
    </button>

      </div>

    </div>
  )
}