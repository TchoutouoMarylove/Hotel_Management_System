import {CircleUserRound} from 'lucide-react'
export function  Profile({description}){
  return (
    <div className='p-9'>
     <div className='flex gap-2 items-center justify-center text-black/60'>
       <div><CircleUserRound size={50} color='brown'/></div>
       <div>
         <p>{description}</p>
       </div>
     </div>



    </div>
  )
}