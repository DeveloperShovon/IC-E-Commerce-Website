import ProductSlide from './ProductSlide';
import divbanner from '../../assets/home/div.banner-img.png';
export default function DailyBestSells() {

  return (
    <div>
        <section>
            <div >
                <h4 className='p-6 font-bold text-2xl text-gray-700'>Daily Best Sells</h4>
                <div className='relative grid grid-cols-1 md:grid-cols-12 gap-4'>
                 {/* left part div banner*/}
                <div className='  col-span-12 md:col-span-3 '>
                    <img className='w-full md:w-auto ' src={divbanner}alt="" />
                </div>
                {/* right part */}
                <div className='p-3 absolute bottom-[50px] left-2 -translate-x-1/2 w-[90%]  col-span-12 md:static md: translate-x-0 md:col-span-9 flex items-center justify-center'>
                    <ProductSlide/>
                </div>
            </div>
            </div>
        </section>
      
    </div>
  )
}
