import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import banner from "../../assets/home/banner.png";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    subTitle: "First 10 sales 10% offer",
    title: "Enjoying grocery",
    button: "Shop now",
    image: "banner",
  },
  {
    id: 2,
    subTitle: "Fresh organic food",
    title: "Healthy vegetable",
    button: "Order now",
    image: "/images/banner2.png",
  },
];

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-[#f5f1ed]">
      
      {/* Background Shape */}
      <div className="absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-white/30 md:h-[500px] md:w-[500px]" />

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-auto min-h-[600px] md:min-h-[700px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="container mx-auto grid min-h-[600px] grid-cols-1 items-center gap-10 px-5 py-14 md:min-h-[700px] md:grid-cols-2 md:px-10 lg:px-16">
              
              {/* Left Content */}
              <div className="order-2 space-y-5 text-center md:order-1 md:text-left">
                
                <p className="text-lg font-medium text-[#f2a93b] sm:text-xl md:text-2xl">
                  {slide.subTitle}
                </p>

                <h1 className="text-4xl font-extrabold leading-tight text-[#222] sm:text-5xl md:text-6xl lg:text-7xl">
                  {slide.title}
                </h1>

                <button className="rounded-md bg-[#f2a93b] px-8 py-3 text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-[#e89a21] sm:px-10 sm:py-4 sm:text-lg">
                  {slide.button}
                </button>
              </div>

              {/* Right Image */}
              <div className="order-1 flex items-center justify-center md:order-2">
                <div className="absolute h-[250px] w-[250px] rounded-full bg-white/20 blur-3xl sm:h-[350px] sm:w-[350px] md:h-[500px] md:w-[500px]" />

                <img
                  src={slide.image}
                  alt="banner"
                  className="relative z-10 w-full max-w-[260px] object-contain transition duration-500 hover:scale-105 sm:max-w-[350px] md:max-w-[500px] lg:max-w-[600px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Style */}
      <style jsx>{`
        .swiper-pagination {
          padding-bottom: 20px;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 20px;
          background: #f2a93b;
        }
      `}</style>
    </div>
  );
}