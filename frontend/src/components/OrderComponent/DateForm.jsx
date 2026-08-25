import {Plus, Minus } from "lucide-react"
import { useState} from "react";

export function DateForm({handleDateNext}){
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");


  const [adult, setAdult ] = useState(0);
const [teenager, setTeenager ] = useState(0);
const [children, setChildren ] = useState(0);

  function handleNext() {
    if (!checkIn || !checkOut) {
      alert("Please select your check-in and check-out dates.");
      return;
    }
 if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

        if (adult + teenager + children === 0) {
      alert("Please select at least one guest.");
      return;
    }

    handleDateNext({

      checkIn: checkIn,

      checkOut: checkOut,

      adults: adult,

      teenagers: teenager,

      children: children

    });
    

  }
  
  return (
    <div className=" w-95 bg-[#2E1515] ml-50 mt-5 rounded-xl">
      <div className="text-white p-3">
      <div>Dates</div>

     <div className="mb-5"> 

        <div className="mb-2">Check-in </div>
         
              <div className="border w-full  h-10 rounded-lg flex justify-center items-center mb-7 mt-4 hover:cursor-pointer" >
        

  <input
    type="date"
    value={checkIn}
    onChange={(e) => setCheckIn(e.target.value)}
    className="bg-transparent outline-none ml-2 w-full"
  />
</div>

     </div>

            <div className="mb-7">

          <div className="mb-2">
            Check-out
          </div>

          <div className="border w-full h-10 rounded-lg flex items-center px-2">

          

            <input

              type="date"

              value={checkOut}

              onChange={(e) =>
                setCheckOut(e.target.value)
              }

              className="bg-transparent outline-none ml-2 w-full  "

            />

          </div>

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
    onClick={handleNext}
    >
      Next
    </button>

      </div>

    </div>
  )
}