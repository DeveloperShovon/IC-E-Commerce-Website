import { useEffect, useState } from "react";
import Banner from "../component/Homepage/bannar";
import ProductList from "../component/Products/productList";
import { supabase } from "../createClint";

export default function Products() {
  const [products, setProducts] = useState([]);
  // Fetch products from Supabase
  async function fetchPost() {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      setProducts(data);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(products);
  return (
    <div>
      <Banner
        imgUrl="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/Banner/ProductPageBaner%20(1).png"
        title="The best way to stuff your wallet."
        subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, modi."
      />
      <div>
        <ProductList products={products} />
      </div>
    </div>
  );
}
