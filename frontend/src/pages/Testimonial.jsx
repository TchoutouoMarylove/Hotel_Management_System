import { Profile } from "../components/Profile"
export function Testimonial(){
  const profile = [
    {
      id:1,
      img: "",
      description:"The staff is helpful and friendly"
    },
    {
      id:2,
      img: "",
      description:"They have good buffet , i stayed for one night before embarking on my trip"
    },
     {
      id:3,
      img:"",
      description:"Deliceous breakfast and cozy bar, i highly recommend this hotel and fro sure , i'll be back"
    },
    {
      id:4,
      img:"" ,
      description:"Very good rooms and beds,they serve real and excellent meals"
    },
      {
      id:5,
      img:"",
      description:"Deliceous breakfast and cozy bar, i highly recommend this hotel and fro sure , i'll be back"
    },
    {
      id:6,
      img:"" ,
      description:"Very good rooms and beds,they serve real and excellent meals"
    },
        {
      id:7,
      img:"",
      description:"Deliceous breakfast and cozy bar, i highly recommend this hotel and fro sure , i'll be back"
    },
    {
      id:8,
      img:"" ,
      description:"Very good rooms and beds,they serve real and excellent meals"
    },
            {
      id:9,
      img:"",
      description:"Deliceous breakfast and cozy bar, i highly recommend this hotel and fro sure , i'll be back"
    },


  ]

return(
  <div  id="Testimonial"  className="h-110 bg-[#F3E9DC]" >
   <div className="text-center text-4xl text-[#3B2720]">
 What Our Guests Say
   </div>
    <div  className=" grid grid-cols-3">

   {
    profile.map((prof) => <Profile  description={prof.description}/>)
   }
    </div>

    
  </div>
)

}