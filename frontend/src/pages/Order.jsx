import { useState } from 'react';
import { DateForm } from '../components/OrderComponent/DateForm';
import room from '../assets/images/orderroom.webp';
import { Nav } from "../components/NavComponent/Nav"
import { Category } from '../components/OrderComponent/Category';
export function Order(){

  const[page , setPage] = useState("Date")
const [bookingData, setBookingData] = useState({
  checkIn: "",
  checkOut: "",
  adults: 0,
  teenagers: 0,
  children: 0
});

  function handleDateNext(data) {

    setBookingData(data);

    setPage("Category");

  }


 
  return(
    <div className="h-screen ">
     <nav className="h-20 bg-gradient-to-r from-[#6B3A3A] to-[#2E1515]  ">
  <Nav/>

</nav>

<div className="h-20 bg-[#5A2E2E]">

  <div className='flex justify-between items-center text-white text-xl p-6 '>
    
      <button
   className='hover:cursor-pointer hover:animate-pulse'
      onClick={() => setPage("Date")}
      >Date</button>
    <button
     className='hover:cursor-pointer hover:animate-pulse'
    onClick={() => setPage("Category")}>Category</button>

    <div>Rates</div>
    <div>Summary</div>
    <div>Details</div>
  </div>


</div>

<div className="relative h-150">
  <img
    src={room}
    className="w-full h-full object-cover "
    />

  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90 ">

    
    <div className='flex justify-center'>
      {page === "Date" && (
  <DateForm handleDateNext={handleDateNext} />
)}
       
    {page === "Category" && (
  <Category
    bookingData={bookingData}
  />
)}
    </div>
  

</div>



  






</div>




    </div>
  )
}
