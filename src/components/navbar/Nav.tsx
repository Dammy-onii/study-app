import React from "react";

function Nav() {
  return (
    <div className=" w-1/5 flex flex-col px-5 py-10 ">
      <div className=" flex flex-row items-center justify-between ">
        <div className=" flex flex-row items-center gap-4 ">
          <span className=" w-10 h-10 bg-red-600 rounded-full flex items-center justify-center ">
            <h1 className=" text-2xl text-white ">D</h1>
          </span>
          <h2>Damilola Oni</h2>
        </div>
        <span className="material-symbols-outlined">expand_all</span>
      </div>

      <div className=" flex flex-col py-5 gap-2  ">
        <div className=" flex flex-row gap-2 items-center ">
          <span className="material-symbols-outlined text-sm">apps</span>
          <h1>All notes</h1>
        </div>

        <div className=" flex flex-row gap-2 items-center ">
          <span className="material-symbols-outlined text-sm">today</span>
          <h1 className="">Today's Notes</h1>
        </div>

        <div className=" flex flex-row gap-2 items-center ">
          <span className="material-symbols-outlined text-sm">
            playing_cards
          </span>
          <h1>Flash Cards</h1>
        </div>
      </div>

      <div className=" flex flex-row items-center gap-2 ">
        <span className="material-symbols-outlined w-6 h-6 text-sm text-white bg-pink-200 rounded-full flex items-center justify-center">
          add
        </span>
        <h2>Create</h2>
      </div>
    </div>
  );
}

export default Nav;
