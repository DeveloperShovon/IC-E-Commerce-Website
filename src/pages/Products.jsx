
import Banner from "../component/Homepage/bannar";
import Footer from "../component/Homepage/Footer";
import HeroSection from "../component/Homepage/HeroSection";
import ProductList from "../component/Products/productList";


export default function Products() {
  


  ;
  return (
  <>
       <section>
         <Banner
        imgUrl="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/Banner/ProductPageBaner%20(1).png"
        title="The best way to stuff your wallet."
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, modi."
      />
      </section>

      <section className="">
          <ProductList/>
      </section>
      <section className="mx-3">
          <HeroSection/>
      </section>
      <section >
          <Footer/>
      </section>
  </>
    
  );
}
