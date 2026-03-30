import Banner from "../component/Homepage/bannar";
import DailyBestSells from "../component/Homepage/DailyBestSells";
import PopularCategories from "../component/Homepage/PopularCategories";

export default function Home() {
  return (
    <div>
      <section>
        <Banner imgUrl="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/Banner/home%20cover.png" />
      </section>
      {/* Popular Categories Section */}
      <section className="container mx-auto px-4">
        <PopularCategories />
      </section>
      <section className="container mx-auto px-4">
        <DailyBestSells />
      </section>
    </div>
  );
}
