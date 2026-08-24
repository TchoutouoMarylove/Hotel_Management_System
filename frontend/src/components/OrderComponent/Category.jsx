import room1 from '../assets/images/FalaiseRooms/cat1.jpg'
import room2 from '../assets/images/FalaiseRooms/cat2.jpg'
import room3 from '../assets/images/FalaiseRooms/cat3.jpg'
import roomNot1 from '../assets/images/FalaiseRooms/cat1Not.jpg'


import { CategoryAvailable } from './CategoryAvailable'
import { CatNonAvailable } from '../../CatNonAvailable'
export function Category(){


  const categoryAvailable =[

    {id:1, 
      img: room1, 
    description:"Standard  Room",
    price: "70.000",
  
    },
    {id:2, 
      img: room2, 
    description:" Deluxe Room",
    price: "150.000",
  
    },
     {id:3, 
      img: room3, 
    description:"Standard  Room",
    price: "70.000",
  
    }
    
  ]

  const categoryNonAvailable =[

    {id:1, 
      img: roomNot1, 
    description:"Standard  Room",
    price: "70.000",
  
    },
    {id:2, 
      img: room2, 
    description:" Deluxe Room",
    price: "150.000",
  
    },
     {id:3, 
      img: room3, 
    description:"Standard  Room",
    price: "70.000",
  
    }
    
  ]








  return (
    <div className="h-250 w-full bg-slate-300">

 <div className="flex justify-center mb-5">

     <div className="h-20 w-290 bg-white mt-10 border border-white shadow-lg flex justify-around items-center rounded-lg">
      <div>
        <div>Nights Selected <span>2</span></div>
        <div><span>sun 8/23/2026 </span> to <span>tues 8/23/2026</span></div>
      </div>

      <div>

        <div>Guests Selected</div>
        <div>Adults <span>2</span></div>
      </div>
      
    </div>
 </div>
  {/* div for rooms */}
     <div>
      <div>
        <div className="text-center text-white text-2xl font-bold font-serif mb-5">Categories with Availability</div>
        <div className='flex justify-start ml-20 gap-3'>
       {
         categoryAvailable.map((cat) =>
  <CategoryAvailable key={cat.id} cat={cat} />
)
       }

          
        </div>






      </div>

       <div className='mt-4'>
          <div className="text-center text-white text-2xl font-bold font-serif mb-5">Categories without Availability</div>
            <div className='flex justify-start ml-20 gap-3'>



             {
              categoryNonAvailable.map((Cat) => <CatNonAvailable  Cat={Cat}/>)

             }


            </div>


       </div>








     </div>
   



    </div>
  )
}