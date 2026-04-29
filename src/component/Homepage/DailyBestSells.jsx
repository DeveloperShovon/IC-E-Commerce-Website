import ProductSlide from './ProductSlide';
import divbanner from '../../assets/home/div.banner-img.png';
export default function DailyBestSells() {

  return (
    <div>
        <section className="py-6">
  <div className="max-w-7xl mx-auto px-4">
    
    <h4 className="mb-6 font-bold text-2xl text-gray-700">
      Daily Best Sells
    </h4>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
      
      {/* Left Banner */}
      <div className="w-full flex justify-center md:justify-start">
        <img 
          className="w-full max-w-xs md:max-w-full object-cover rounded-xl" 
          src={divbanner} 
          alt="banner"
        />
      </div>

      {/* Right Product Slider */}
      <div className="md:col-span-3 flex justify-center">
        <div className="w-full ">
          <ProductSlide />
        </div>
      </div>

    </div>
  </div>
</section>
      
    </div>
  )
}
