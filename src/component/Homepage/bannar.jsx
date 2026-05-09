import React from 'react'
import containerImg from "../../assets/ProductsImg/Container.png"
import {motion} from "framer-motion"

const bannar = () => {
  return (
<>
        <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2}}
        className= "  bg- bg-center bg-cover h-[400px] w-full flex items-center justify-center"style={{ backgroundImage: `url(${containerImg})`}}>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2}}
            
            >
              <h1 className=' text-3xl md:text-4xl font-bold font-serif text-gray-800 text-center '>The best way to stuff <br /> your wallet</h1>
              <p className='text-lg text-gray-600 text-center pt-3 '>Sign up for the daily newsletter</p>

              <button className='bg-[#3aa856] text-white px-4 py-2 rounded mt-4 block mx-auto hover:bg-[#2d8a44]'>Subscribe</button>
            </motion.div>
    </motion.div>
</>
  )
}

export default bannar
