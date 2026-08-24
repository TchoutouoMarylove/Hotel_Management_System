import {User} from 'lucide-react'

export function CatNonAvailable({Cat}){
  return(

<div className='opacity-60'>
  <div className="h-85 w-95 bg-white rounded-lg p-3">
  
      <div className=" h-40 w-full  ">
<img src={Cat.img} alt="" className='h-full w-full' />
      </div>

      <div className= " mt-2">
       <div className='text-lg'></div>
         <div className='flex gap-2 mt-1'>
          <div><User color='brown'/></div>
          <div>Maximum persons: 2</div>
         </div>
         <div className='mt-2'>
          <p className='text-sm'>from</p>
        <p>40.000</p>
          <p>per room/nigthly</p>
         </div>
         <div className=' h-10 w-full bg-yellow-700 mt-2 rounded-lg flex justify-center items-center text-xl'>
          Show rates
         </div>

      </div>
   
      
  </div>
</div>
  )
}