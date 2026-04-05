import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";


export default function ChooseUs() {
    
  return (
    <section className='py-9'>
         <h1 className='text-center p-6 text-2xl text-gray-900 font-semibold'>Why People Choose us?</h1>
        <div className=' grid lg:grid-cols-2 gap-4 ' >
           
            <div className='flex justify-center items-center'>
                <img className='w-50  md:w-md not-[]: rounded-2xl' src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/Banner/ChooseUs.png" alt="" />
            </div>
            <div>
                <div className='p-4 grid gap-8'>
                    
                <div className='grid grid-cols-12 gap-4 border-2 border-gray-100 p-4 rounded-lg'>
                    <div className='col-span-3 text-4xl text-orange-500 justify-center items-center flex'>
                       <span className=' p-3 bg-gray-100 rounded-4xl '> <TbTruckDelivery /></span>
                    </div>
                     <div className='col-span-9'>
                        <h1 className='text-md font-semibold py-2'>Convenient and Reliable</h1>
                        <p className=' text-gray-700 text-sm'>Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.</p>
                     </div>
                </div>

                <div className='grid grid-cols-12 gap-4   border-2 border-gray-100 p-4 rounded-lg'>
                    <div className=' col-span-3 text-4xl text-orange-500 justify-center items-center flex'>
                       <span className=' p-3 bg-gray-100 rounded-4xl '> <TbTruckDelivery /></span>
                    </div>
                     <div className='col-span-9'>
                        <h1 className='text-md font-semibold py-2'>Variety of Options</h1>
                        <p className=' text-gray-700 text-sm'>From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.</p>
                     </div>
                </div>

                <div className='grid grid-cols-12 gap-4   border-2 border-gray-100 p-4 rounded-lg'>
                    <div className='col-span-3 text-4xl text-orange-500 justify-center items-center flex'>
                       <span className=' p-3 bg-gray-100 rounded-4xl '> <TbTruckDelivery /></span>
                    </div>
                     <div className='col-span-9'>
                        <h1 className='text-md font-semibold py-2 '>Eat Burger</h1>
                        <p className=' text-gray-700 text-sm'>Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.</p>
                     </div>
                </div>

                
                </div>
            </div>
        </div>
    </section>
  )
}
