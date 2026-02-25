import { useEffect, useState } from 'react'
import Banner from "../component/Homepage/bannar"
import ProductList from "../component/Products/productList"
import { supabase } from '../createClint';


export default function Products() {


  const [products, setProducts] = useState([]);
   
    async function fatchpost() {
        const {data, error } = await supabase.from("products").select("*");
        if (error) {
            console.error("Error fetching products:", error);
        } else {
            setProducts(data);
        }
    }
    
    useEffect(() => {
        fatchpost();
    }, []);
  
   console.log(products);
  return (
    
    <div>
        <Banner/>

        {/* <section>
          <img  src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/Banner/ProductPageBaner.png"alt="Home Banner" className='w-full banner-img' />
        </section> */}
        <div>
          <ProductList products={products}/>
        </div>
        
    </div>
  )
}
