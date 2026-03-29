export default function loadingSpin({loading}) {
    console.log(loading);
  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
