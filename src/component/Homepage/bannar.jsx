
export default function Banner() {
  return (
    <div>
      <section className="grid grid-cols-2 gap-4 items-middle p-10">
       <div className=' align-middle'>
        <h1 className="text-3xl font-bold">The best way to stuff your wallet.</h1>
        <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, modi.</p>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">Subscribe</button>
       </div>
       <div className='grid-cols-8'></div>
      </section>
    </div>
  )
}
