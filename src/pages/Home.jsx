import Banner from "../component/Homepage/bannar"

export default function Home() {
  return (
    <div>
      <section>
        <Banner 
          imgUrl="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/Banner/HomePageBanner.png"
          title="The best way to stuff your wallet."
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, modi."
        />
      </section>
    </div>
  )
}
