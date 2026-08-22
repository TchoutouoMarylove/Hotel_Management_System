import  room1 from '../assets/images/room2lafalaise.webp';
import  room2 from '../assets/images/room3lafalaise.webp';
import  room3 from '../assets/images/room5lafalaise.webp';
import  room4 from '../assets/images/FalaiseRooms/falaiseroom2.jpg';
import  room5 from '../assets/images/FalaiseRooms/LaFalaiseroom4.jpg';

import  room6 from '../assets/images/FalaiseRooms/LaFalaiseroom6.jpg';

import  room7 from '../assets/images/FalaiseRooms/LaFalaiseroom10.jpg';

import  room10 from '../assets/images/room6lafalaise.webp';

export function Room(){
  return(
    <div className="h-150 w-full bg-[#E8DED4]  p-8 ">

     <div className='mb-10 ml-15'>
       <div className='text-[#3B2720] text-4xl mb-5 font-arial font-bold'>
        Our rooms
      </div>
      <div className='text-[#6B4F43]'>
        <p>All our rooms have one thing in common,</p>
        <p>they are designed to ensure that your stay with us is as relaxing and comfortable as possible</p>
      </div>
     </div>


<div className='flex h-full w-full'>
  <div className=' grid grid-cols-4 w-100 h-90 flex-1'>

     <div className='relative flex justify-start items-end '>
<img src={room1} alt="" className=' h-40  absolute rounded-lg'  />

<div className='absolute text-white mb-3 ml-2'>
<a href="" className=' text-[20px]'>Suite</a>
</div>
   </div>

    <div className='relative flex justify-start items-end' >
<img src={room2} alt="" className=' h-40 absolute rounded-lg' />
<div className='absolute text-white mb-3 ml-2'>
<a href="" className=' text-[20px]'>Deluxe</a>
</div>
    </div>
  <div className='relative flex justify-start items-end'>
<img src={room3} alt="" className=' h-40 absolute rounded-lg'  />
<div className='absolute text-white mb-3 ml-2'>
<a href="" className=' text-[20px]'>Luxury</a>
</div>
  </div>
<div className='relative flex justify-start items-end'>
<img src={room4} alt="" className=' h-40 absolute rounded-lg'/>
<div className='absolute text-white mb-3 ml-2'>
<a href="" className=' text-[20px]'>Standard</a>
</div>
</div>
 

 <div className='relative flex justify-start items-end'>
<img src={room5} alt="" className=' h-40 absolute rounded-lg' />
<div className='absolute text-white mb-3 ml-2'>
<a href="" className=' text-[20px]'>Standard double</a>
</div>
 </div>

 <div className='relative flex justify-start items-end'>

<img src={room6} alt="" className=' h-40 absolute rounded-lg'/>
<div className='absolute text-white mb-3 ml-2'>
<a href="" className=' text-[20px]'>Suite</a>
</div>
 </div>

 <div className='relative flex justify-start items-end'>
<img src={room7} alt="" className=' h-40 absolute rounded-lg'/>
<div className='absolute text-white mb-3 ml-2'>
<a href="" className=' text-[20px]'>Deluxe</a>
</div>
 </div>

 <div className='relative flex justify-start items-end'>
<img src={room10} alt="" className=' h-40 absolute rounded-lg'/>
<div className='absolute text-white mb-3 ml-2'>
<a href="" className=' text-[20px]'>Deluxe double</a>
</div>
 </div>
</div>
</div>

    </div>
  )
}