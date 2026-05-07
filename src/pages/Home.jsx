import Banner from "../component/Homepage/bannar";
import ChooseUs from "../component/Homepage/ChooseUs";
import DailyBestSells from "../component/Homepage/DailyBestSells";
import DealOfTheDay from "../component/Homepage/DealOfTheDay";
import Footer from "../component/Homepage/Footer";
import HeroBanner from "../component/Homepage/HeroBanner";
import HeroSection from "../component/Homepage/HeroSection";
import PopularCategories from "../component/Homepage/PopularCategories";
import SpecialDishes from "../component/Homepage/SpecialDishes";

export default function Home() {
  return (
    <div>
      <section>
        <HeroBanner />
      </section>

      {/* Popular Categories Section */}
      <section className="max-w-7xl container mx-auto  p-2">
        <PopularCategories />
      </section>

      <section className="max-w-9xl container mx-auto m-auto ">
        <DailyBestSells />
      </section>

      <section className="max-w-7xl container mx-auto  p-4">
        <SpecialDishes />
      </section>

      <section className="max-w-7xl container mx-auto  p-4">
        <DealOfTheDay />
      </section>

      <section className="max-w-6xl container mx-auto  p-4">
        <ChooseUs />
      </section>

      <section className="max-w-7xl container mx-auto  p-4">
        <HeroSection />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
