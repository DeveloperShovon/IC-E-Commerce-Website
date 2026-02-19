import React from 'react'
import banner from "../../assets/home/HomeBanner-img.png"
export default function Banner() {
  return (
    <div>
      <section>
        <img src={banner} alt="Home Banner" className='banner-img' />
      </section>
    </div>
  )
}
