export default function Banner({ imgUrl, subtitle, title, rightContent }) {
  return (
    <div>
      <section
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 md:p-12 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="align-middle">
          <h1 className="text-2xl  font-bold py-4 ">{title}</h1>
          <p className="text-gray-600 p-4">{subtitle}</p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg">
            Subscribe
          </button>
        </div>
        <div>{rightContent}</div>
      </section>
    </div>
  );
}
