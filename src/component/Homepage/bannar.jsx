export default function Banner({ imgUrl, subtitle, title, rightContent }) {
  return (
    <div className="w-full ">
      <section
        className=" grid grid-cols-1   items-center py-6 md:p-12 w-full bg-cover  bg-no-repeat"
        style={{ backgroundImage: `url('${imgUrl}')` }}
        >
      
        <div className="py-20 md:py-40 px-4 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className=" text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold py-4 ">{title}</h1>
          <p className="text-gray-600 py-4 md:text-lg">{subtitle}</p>
          <button className="bg-red-500 md:my-4 hover:bg-red-600 text-white py-2 px-6 rounded-lg">
            Subscribe
          </button>
        </div>
        <div>{rightContent}</div>
        </div>
      </section>
    </div>
  );
}
  