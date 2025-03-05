import React, { useState } from "react";
import notesData from "../data/data";
import { NavLink } from "react-router";

function Home() {
  const [data, setData] = useState<any[]>(notesData);

  const [view, setView] = useState<string>("box");


  return (
    <div>
      <div className=" w-full px-10 py-5 flex flex-row items-center justify-between ">
        <h1 className=" myF text-2xl font-semibold tracking-wider ">
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
        <div className=" flex flex-row items-center justify-between mt-10 mb-5 ">
          <div className=" px-2 py-2 flex flex-row items-center justify-center bg-black text-white rounded-xl gap-2 ">
            <span className="material-symbols-outlined text-sm">add</span>
            <h2 className=" text-sm font-medium ">Create New</h2>
          </div>

          <div className=" flex flex-row items-center ">
            <div className=" flex flex-row items-center border rounded-lg ">
              <button
                className={` ${
                  view == "box" ? "bg-blue-200" : ""
                } px-4 py-2 border-r flex items-center hover:bg-blue-100 rounded-l-lg `}
                onClick={() => setView("box")}
              >
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button
                className={`${
                  view == "list" ? "bg-blue-200" : ""
                } px-4 py-2 flex items-center hover:bg-blue-100 rounded-r-lg `}
                onClick={() => setView("list")}
              >
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={` ${
            view == "list"
              ? " flex flex-row items-center justify-between border-b  "
              : ` hidden `
          }    rounded-xl px-5 py-4 transition-all  `}
        >
          <h2 className=" myF ">Title</h2>
          <div className=" flex flex-row gap-10  ">
            <h2 className=" myF ">Created</h2>
            <h2 className=" myF ">Sources</h2>
          </div>
        </div>
        <div
          className={` ${view == "list" ? " " : "grid grid-cols-4 "} gap-5  `}
        >
          {data.map((note) => (
            <NavLink to={`/${note.id}`}>
              <div
                key={note.id}
                className={` ${
                  view == "list"
                    ? " flex flex-row items-center justify-between border-b hover:bg-slate-100 duration-100 px-2 hover:shadow-md "
                    : ` relative h-64 flex flex-col justify-between px-5 py-5 ${note.bg} `
                }    rounded-xl transition-all duration-1000 `}
              >
                <button className="absolute top-5 right-5">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
                <div className={` ${view == "list" ? " flex flex-row items-center " : " "} `}>
                  <div className="w-20 h-20 flex items-center justify-center">
                    <h1
                      className={` ${
                        view == "list" ? " text-3xl " : "text-6xl "
                      }  `}
                    >
                      {note.icon}
                    </h1>
                  </div>
                  <h1
                    className={` ${
                      view == "list"
                        ? "text-lg font-medium "
                        : "text-xl font-semibold "
                    }   my-2`}
                  >
                    {note.title}
                  </h1>
                </div>
                <p
                  className={`${
                    view == "list"
                      ? "hidden "
                      : "text-sm text-gray-700 truncate text-wrap"
                  }`}
                >
                  {note.about}
                </p>
                <div className="flex flex-row text-sm text-gray-600 gap-2">
                  <h2>{note.date}</h2>
                  <h2>-</h2>
                  <h2>
                    {note.sources.length}{" "}
                    {note.sources.length === 1 ? "source" : "sources"}
                  </h2>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
