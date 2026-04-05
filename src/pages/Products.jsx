
import Banner from "../component/Homepage/bannar";
import ProductList from "../component/Products/productList";


export default function Products() {
  


  ;
  return (
    <div>
      <Banner
        imgUrl="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/Banner/ProductPageBaner%20(1).png"
        title="The best way to stuff your wallet."
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, modi."
      />
      <div>
        <ProductList/>
      </div>      
      
    </div>
    
  );
}
