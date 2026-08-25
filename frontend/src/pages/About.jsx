import {MapPin, Star} from "lucide-react"
import { PersonStanding } from "lucide-react";
import { StarIcon } from "lucide-react";
import {Heart} from 'lucide-react'




import gym from '../assets/images/FalaiseServices/gym.jpg';

export function Services(){
  return(
    <div id="services" className="h-80 w-full bg-[#C9B5A5] p-10 grid grid-cols-2">
      {/* first grid */}
      <div className="flex flex-col">
      <div className="mb-10">
      <div className="flex items-center">
      <div><MapPin color="brown" size={30}/></div>
      <div className="font-bold text-xl"> Top Location</div>
       
       ]</div>

       <div>
        <p>we are located at Avenue Marechal Foch ,</p> 
        <p>warda close to the National Museum </p>
       </div>
      </div>


       <div>
       <div className="flex items-center">
       <div><PersonStanding color="brown " size={30}/></div>
       <div className="font-bold text-xl">Activities and attraction</div>

      </div>

       <div>
        <p>There are so many fun activities in La falaise, </p>
        <p> we have a gym hall  were you can exercise yourself </p>
        <p>we have a swimming pool and marvelous dishes</p>
       </div>
       </div>

      </div>




      <div>
        <div className="flex flex-col">
      <div className="mb-10">
        <div className="flex items-center">
       <div><Heart color="brown" size={30}/>
       </div>

       <div className="font-bold text-xl"> A Charming Hotel</div>

       </div>

       <div>
        <p>we are located at Avenue Marechal Foch ,</p> 
        <p>warda close to the National Museum </p>
       </div>
      </div>


       <div>
       <div className="flex items-center">
       <div><Star color="brown " size={30}/></div>
       <div className="font-bold text-xl">Very pleased guests</div>

      </div>

       <div>
        <p>There are so many fun activities in La falaise, </p>
        <p> we have a gym hall  were you can exercise yourself </p>
        <p>we have a swimming pool and marvelous dishes</p>
       </div>
       </div>

      </div>
      </div>

</div>
  )
}