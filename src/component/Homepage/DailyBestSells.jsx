import ProductSlide from './ProductSlide';
import divbanner from '../../assets/home/div.banner-img.png';
export default function DailyBestSells() {

  return (
    <div>
        <section>
            <div>
                <h4 className='p-6 font-bold text-2xl text-gray-700'>Daily Best Sells</h4>
                <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                 {/* left part div banner*/}
                <div className=' col-span-12 md:col-span-3 '>
                    <img className='w-auto ' src={divbanner}alt="" />
                </div>
                {/* right part */}
                <div className='  col-span-12 md:static md:col-span-9 flex items-center justify-center'>
                    <ProductSlide/>
                </div>
            </div>
            </div>
        </section>
      
    </div>
  )
}
