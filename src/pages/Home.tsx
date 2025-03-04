import React from "react";

function Home() {
  return (
    <div>
      <div className=" w-full px-10 py-5 flex flex-row items-center justify-between ">
        <h1 className=" text-2xl font-semibold tracking-wider ">
          My Study App
        </h1>
        <div className=" flex flex-row items-center gap-4 ">
          <span className=" w-10 h-10 bg-red-600 rounded-full flex items-center justify-center ">
            <h1 className=" text-2xl text-white ">D</h1>
          </span>
        </div>
      </div>

      <div className=" px-32 py-20 flex flex-col ">
        <h1 className=" text-5xl font-medium tracking-wider text-gray-900 ">
          Welcome to My Study App
        </h1>
        <div className=" flex flex-row items-center justify-between mt-10 ">
          <div className=" px-2 py-2 flex flex-row items-center justify-center bg-black text-white rounded-xl gap-2 ">
            <span className="material-symbols-outlined text-sm">add</span>
            <h2 className=" text-sm font-medium ">Create New</h2>
          </div>

          <div className=" flex flex-row items-center ">
            <div className=" flex flex-row items-center border rounded-lg ">
              <button className=" px-4 py-2 border-r flex items-center hover:bg-blue-100 rounded-l-lg ">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className=" px-4 py-2 flex items-center hover:bg-blue-100 rounded-r-lg ">
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-4 py-10 ">
          <div className=" relative h-64 flex flex-col justify-between px-5 py-5 bg-blue-50 rounded-xl ">
            <button className=" absolute top-5 right-5 ">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
            <div className=" w-20 h-20 bg-gray-500 "></div>
            <h1 className=" text-2xl ">Software Engineering</h1>
            <div className=" flex flex-row  text-sm text-gray-600 gap-2 ">
              <h2>Feb 4, 2025</h2>
              <h2>-</h2>
              <h2>1 source</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
