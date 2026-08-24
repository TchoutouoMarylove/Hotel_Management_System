 import reception from '../assets/images/FalaiseServices/reception.jpg';

import pool from '../assets/images/FalaiseServices/pool.jpg';

import gym from '../assets/images/FalaiseServices/gym.jpg';
 import realLafalaisepic from '../assets/images/realLafalaisepic.jpg';
import LaFalaise2 from '../assets/images/FalaiseServices/LaFalaise2.jpg';
import room from '../assets/images/room7lafalaise.webp'
import food from '../assets/images/Falaise TraditionalMeal/food.jpg'
import toilet from '../assets/images/FalaiseServices/toilet.jpeg'

export const TheHotel = ()=>{
  return(
    <div id='hotel' className='h-140 w-full bg-[#F7F3EE] grid grid-cols-2 py-8'>
    
    <div>
      <div className='mb-10 ml-12 text-3xl font-arial font-bold ml-30'>
    <h1 className='text-[#3B2720]'>OUR HOTEL</h1>
    <p className='text-xl font-normal text-gray-400'>A unique experience in the heart of La Falaise </p>
      </div>


      <div>
        <div className='h-100 w-110 rounded-3xl overflow-hidden ml-7'>
          <img src={realLafalaisepic} alt="" className='h-full'/>
        </div>
       <div>
        
       </div>

      </div>
      <div>
       
      </div>


     </div>
 
    
  <div className='flex  flex-col'>

    {/** the div of the the map which will later me a component*/}
<div className='flex '>

  <div className=' mt-25 mb-5'>

  <img src={LaFalaise2} alt="" className='rounded-3xl w-80 h-70 '/>



</div>
 <div>
  <div className='flex gap-3 mt-25 ml-5'>
   <div>
    <img src={reception} alt="" className='w-30 h-30' />
  </div>
  <div>
     <img src={pool} alt="" className='w-30 h-30' />
  </div>
<div>
     <img src={gym} alt="" className='w-30 h-30' />
  </div>
 </div>

<div className='flex gap-3 mt-5 ml-5 '>
  <div>
    <img src={food} alt="" className='w-30 h-30' />
  </div>
  <div>
     <img src={room} alt="" className='w-30 h-30' />
  </div>
<div>
     <img src={toilet} alt="" className='w-30 h-30' />
  </div>


</div>
 </div>



</div>

 <div className='text-[#6B4F43] mb-20 '>
   <p>Our Wish is to Offer you a Unique and more personal hotel</p>
  <p>We want you to feel at home when when you're staying at our hotel</p>
  <p>That means we go the extra mile to ensure your needs ands wants are fulfilled.
  </p>
  <p>if you need anything we stand here to assist</p>

 </div>

  </div>



    </div>
  )
}