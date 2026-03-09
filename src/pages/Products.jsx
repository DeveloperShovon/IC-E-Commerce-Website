import { useEffect, useState } from "react";
import Banner from "../component/Homepage/bannar";
import ProductList from "../component/Products/productList";
import { supabase } from "../createClint";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch products from Supabase
  async function fetchPost() {
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Error fetching products:", error);
    } 
    else {
      setProducts(data);
      setLoading(false);
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
      {loading && <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin">;
      </div>
    </div>}
    </div>
  );
}
