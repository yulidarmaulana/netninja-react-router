export default function Home() {
  return (
    <div className="home">
      <p className="text-center font-medium">
        Welcome to Another Landing Page <br /> Another landing is a collection
        of designs and slicing desings that I have made so far.
      </p>


      <div className="">
        <div className="max-w-md rounded overflow-hidden shadow-lg bg-slate-800">
          <img
            className="w-full h-48 p-4"
            src="/public/vite.svg"
            alt=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-gray-200 text-xl">something</div>
            <p className="text-gray-200 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <button type="button" className="inline-block mb-2 px-6 py-2.5 bg-violet-400 text-white hover:bg-blue-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 font-medium text-xs w-full rounded-lg">Visit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
