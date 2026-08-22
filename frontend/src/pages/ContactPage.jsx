import { Lollipop } from 'lucide-react';
import { PhoneCallIcon } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export function ContactPage(){
  return(
    <div id="contact"  className="h-50 w-full bg-[#8F7565] flex gap-50">
 <div className='flex flex-col'> 
<div className='border border-2 border-white/50 mt-5 ml-2 rounded-tr-xl'> 
  <h2 className="text-white text-2xl p-2  text-center font-bold">La <span className="text-3xl text-[#D8B4A0]">F</span>alaise</h2>
</div>


 </div>


 <div className='text-white  flex flex-col items-end mt-3'>
  <div className='text-3xl font-bold font-arial mb-9'>Contacts</div>
<a href="tel:+237" >679142081</a>
<a href="tel:+237" >650726100</a>

   <a href="mailto:" className='underline text-blue-800'>mary@gmail.com</a>
   <p><a href="" className='underline text-blue-800'>Contact form</a></p>
 </div>


 <div className='text-white  flex flex-col items-end mt-3'>
  <div className='text-3xl font-bold font-arial mb-9'>Visit Us</div>
    <p>La falaise Hotel</p>
    <p>Avenue Marechal Foch</p>


 </div>

 <div className="flex gap-4 mt-10 " >

  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
  <FaFacebookF className="text-xl" size={40} />
  </a>
  <a href="http://" target="_blank" rel="noopener noreferrer">
  <FaInstagram className="text-xl" size={40} />
  </a>
</div>




    </div>

    
   
  )
}