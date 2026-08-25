import { useEffect,useState } from 'react'
import room1 from '../../assets/images/FalaiseRooms/cat11.jpg'
import room2 from '../../assets/images/FalaiseRooms/cat21.jpg'
import room3 from '../../assets/images/FalaiseRooms/cat32.jpg'
import roomNot1 from '../../assets/images/FalaiseRooms/cat1Not.jpg'


import { CategoryAvailable } from './CategoryAvailable'
import { CatNonAvailable } from './CatNonAvailable'
export function Category({bookingData}){


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
      // img: , 
    description:" Deluxe Room",
    price: "150.000",
  
    },
     {id:3, 
      // img: , 
    description:"Standard  Room",
    price: "70.000",
  
    }
    
  ]


    const [rooms, setRooms] =
    useState([]);

  const [selectedRoom, setSelectedRoom] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

useEffect(() => {

  async function getRooms() {

    try {

      setLoading(true);

      console.log("Booking data:", bookingData);

      const url =
        `http://localhost/LaFalaise_Hotel_Reservation_System/backend/index.php` +
        `?action=availability` +
        `&checkIn=${bookingData.checkIn}` +
        `&checkOut=${bookingData.checkOut}` +
        `&adults=${bookingData.adults}` +
        `&teenagers=${bookingData.teenagers}` +
        `&children=${bookingData.children}`;

      console.log("API URL:", url);

      const response = await fetch(url);

      console.log("Response status:", response.status);

      const data = await response.json();

      console.log("PHP DATA:", data);

      if (data.error) {

        console.error(data.error);

        return;
      }

      setRooms(data);

    } catch (error) {

      console.error(
        "Failed to load rooms:",
        error
      );

    } finally {

      setLoading(false);

    }

  }

  getRooms();

}, [bookingData]);
 

  // async function bookRoom() {

  //   if (!selectedRoom) {

  //     alert(
  //       "Please select a room first."
  //     );

  //     return;

  //   }


  //   try {

  //     const response =
  //       await fetch(

  //         "http://localhost/LaFalaise_Hotel_Reservation_System/backend/index.php?action=reserve",

  //         {

  //           method: "POST",

  //           headers: {

  //             "Content-Type":
  //               "application/json"

  //           },

  //           body: JSON.stringify({

  //             roomId:
  //               selectedRoom.id,

  //             checkIn:
  //               bookingData.checkIn,

  //             checkOut:
  //               bookingData.checkOut,

  //             adults:
  //               bookingData.adults,

  //             teenagers:
  //               bookingData.teenagers,

  //             children:
  //               bookingData.children

  //           })

  //         }

  //       );


  //     const data =
  //       await response.json();


  //     if (data.success) {

  //       alert(
  //         `Reservation successful! Reservation ID: ${data.reservationId}`
  //       );

  //     } else {

  //       alert(data.message);

  //     }


  //   } catch (error) {

  //     console.error(error);

  //     alert(
  //       "Something went wrong."
  //     );

  //   }

  // }



  // if (loading) {

  //   return (

  //     <div className="text-white text-2xl">

  //       Checking room availability...

  //     </div>

  //   );

  // }






  return (
    <div className="h-250 w-full bg-slate-300">

 <div className="flex justify-center mb-5">

     <div className="h-20 w-290 bg-white mt-10 border border-white shadow-lg flex justify-around items-center rounded-lg">
      <div>
        <div>Nights Selected <span>2</span></div>
        <div><span>{bookingData.checkIn}</span> to <span>{bookingData.checkOut}</span></div>
      </div>

      <div>

        <div>Guests Selected</div>
                    <div>

              Adults:
              {" "}
              {bookingData.adults}

              {" | "}

              Teenagers:
              {" "}
              {bookingData.teenagers}

              {" | "}

              Children:
              {" "}
              {bookingData.children}

            </div>
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
<div className="text-center text-white text-2xl font-bold font-serif mb-5">Categories without Availability</div><div className='flex justify-start ml-20 gap-3'>



{
categoryNonAvailable.map((Cat) => <CatNonAvailable  
key={Cat.id}
Cat={Cat}/>)

}


 </div>


</div>








</div>
   



</div>
  )
}