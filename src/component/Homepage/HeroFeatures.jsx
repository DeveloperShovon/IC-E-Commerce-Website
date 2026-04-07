import React from 'react'

export default function HeroFeatures({
  bgColor, // Default color if none is passed
  title, 
  subtitle, 
  highlightText, 
  buttonText, 
  deliveryImage
}) {
  return (
    <div>
      <div 
      // Tailwind uses `bg-[color]` for hex, but `bg-color-weight` is cleaner
      // Use dynamic class name from props
      className={`relative w-full  ${bgColor} flex flex-col md:flex-row items-center p-6 md:p-12 overflow-hidden`}
    >
      
      {/* Light sketch texture background (optional, based on image 2)
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="">
          
        </svg>
      </div> */}

      {/* Text & Input Container: responsive width and alignment */}
      <div className="z-10 w-full md:w-3/5 text-center md:text-left flex flex-col md:items-start mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#253D4E] leading-tight mb-3 md:mb-5">
          {title}
        </h1>
        <p className="text-base md:text-lg text-[#7E7E7E] mb-6 md:mb-10">
          {subtitle} <span className="text-[#3BB77E] font-medium">{highlightText}</span>
        </p>

        {/* Responsive Newsletter Form: stack on mobile, horizontal on desktop */}
        <div className="relative w-full max-w-sm md:max-w-md mx-auto md:mx-0 flex flex-col md:flex-row items-center bg-white rounded-full md:rounded-full overflow-hidden shadow-sm border border-gray-100">
          <div className="pl-5 text-gray-400 hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-auto flex-grow py-3 md:py-4 px-5 outline-none text-sm md:text-base text-gray-700 text-center md:text-left"
          />
          <button className="w-full md:w-auto bg-[#3BB77E] hover:bg-[#29A56C] text-white px-8 py-3 md:py-4 font-medium transition-colors text-sm md:text-base">
            {buttonText}
          </button>
        </div>
      </div>

      {/* Floating Elements / Delivery Man Image Area */}
      {/* Absolute positioning on mobile, flex on desktop for responsiveness */}
      <div className="static md:absolute right-0 bottom-0 h-full w-full md:w-1/2 flex items-center justify-center md:items-end md:justify-end pointer-events-none md:p-6 mt-6 md:mt-0">
        <img 
          src={deliveryImage} 
          alt="Delivery Man" 
          className="max-w-[70%] md:max-w-full h-auto max-h-[120%] md:max-h-full object-contain object-right-bottom md:object-right-bottom translate-y-[10%] md:translate-y-0"
        />
      </div>
    </div>
    </div>
  )
}
