import { Button } from "./button"
const nav =["Home", "The hotel","Our rooms", "Services","Contact"];
export const Nav = () =>{
  
  return(
    <div>
       <div className='h-20 w-full fixed top-0 z-10 left-0 flex justify-between items-center'>
<div >
  <h2 className="text-white text-3xl p-5 font-bold">La <span className="text-6xl text-[#D8B4A0]">F</span>alaise</h2>
</div>

<div className='flex gap-10 text-xl p-3'>

{nav.map((n)=>
<Button key={n}  name={n}/>
)}

</div>

      </div>
    </div>
  )
}