import Banner from "../component/Homepage/bannar";
import DailyBestSells from "../component/Homepage/DailyBestSells";
import DealOfTheDay from "../component/Homepage/DealOfTheDay";
import PopularCategories from "../component/Homepage/PopularCategories";
import SpecialDishes from "../component/Homepage/SpecialDishes";

export default function Home() {
  return (
    <div>
      <section>
        <Banner imgUrl="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/Banner/home%20cover.png" />
      </section>
      {/* Popular Categories Section */}
      <section className="max-w-7xl container mx-auto  py-2">
        <PopularCategories />
      </section>
      <section className="max-w-7xl container mx-auto  py-2">
        <DailyBestSells />
      </section>
       <section className="max-w-7xl container mx-auto  py-2">
        < SpecialDishes/>
      </section>
       <section className="max-w-7xl container mx-auto  py-2">
        <DealOfTheDay/>
      </section>
    </div>
  );
}
