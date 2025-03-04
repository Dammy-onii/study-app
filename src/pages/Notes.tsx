import React from "react";

function Notes() {
  return (
    <div className=" bg-slate-200 h-screen ">
      <div className=" w-full px-10 py-5 flex flex-row items-center justify-between ">
        <div className=" flex flex-row items-center gap-2 ">
          <div className=" w-10 h-10 bg-slate-400 "></div>
          <h1 className=" text-2xl font-light tracking-wider ">
            Software Engineering
          </h1>
        </div>
        <div className=" flex flex-row items-center gap-4 ">
          <span className=" w-10 h-10 bg-red-600 rounded-full flex items-center justify-center ">
            <h1 className=" text-2xl text-white ">D</h1>
          </span>
        </div>
      </div>

      <div className=" grid grid-cols-12 gap-5 px-5 h-[85vh] ">
        {/* Sources  */}
        <div className=" col-span-2 flex flex-col bg-[#f9f9f9] rounded-lg ">
          <div className=" flex flex-row justify-between py-4 px-5 border-b-2 border-slate-200 ">
            <h2>Sources</h2>
            <span className="material-symbols-outlined">window</span>
          </div>
          <div className=" flex flex-col px-5 ">
            <button className=" flex flex-row items-center justify-center gap-2 w-full border rounded-xl my-5 py-2 text-gray-700  ">
              <span className="material-symbols-outlined text-sm">add</span>{" "}
              <h2 className=" text-sm ">Add source</h2>
            </button>
          </div>
        </div>

        {/* Chat And More */}
        <div className=" col-span-6 flex flex-col bg-[#f9f9f9] rounded-lg relative ">
          <div className=" flex flex-row justify-between py-4 px-5 border-b-2 border-slate-200 ">
            <h2>Chat</h2>
          </div>

          <div className=" px-5 py-5 ">
            <div className=" w-20 h-20 bg-gray-500 "></div>
            <h1 className=" text-2xl font-light my-2 ">
              Software Engineering Principles and Practices
            </h1>
            <h3 className=" text-xs font-medium text-gray-500 ">1 source</h3>
            <h2 className=" text-sm font-medium text-gray-700 my-2 ">
              The document describes different models for software development.
              The Rapid Application Model (RAD) emphasizes speed and modularity
              through component reuse and parallel development by different
              teams. The Evolutionary/Incremental model focuses on iterative
              development with incremental additions of functionality based on
              continuous feedback. The Spiral model highlights risk assessment
              and iterative refinement through cycles of objective setting, risk
              reduction, development/validation, and review/planning. Finally,
              the document offers a comparative analysis of process models.
            </h2>
          </div>

          <div className=" w-full px-5 absolute bottom-5 ">
            <div className=" border rounded-xl px-5 py-2 ">
              <div className=" flex flex-row items-center justify-between gap-2 ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Start typing..."
                  className=" w-4/5 border-none bg-inherit outline-none text-gray-700 placeholder:text-gray-700 tracking-wide "
                />
                <div className=" w-fit flex flex-row items-center gap-2 ">
                  <h3 className=" text-xs font-light text-gray-500 ">
                    1 source
                  </h3>
                  <button className=" w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center text-white ">
                    <span className="material-symbols-outlined text-3xl">
                      send
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Studio And Notes */}
        <div className=" col-span-4 flex flex-col bg-[#f9f9f9] rounded-lg relative ">
          <div className=" flex flex-row justify-between py-4 px-5 border-b-2 border-slate-200 ">
            <h2>Studio</h2>
            <span className="material-symbols-outlined">window</span>
          </div>
          <div className=" px-5 py-5 border-b-2 ">
            <h2 className=" text-gray-700 my-4 ">Audio Overview</h2>

            <div className=" w-full  my-2  ">
              <div className=" border rounded-xl px-5 py-5  ">
                <div className=" flex flex-row items-center justify-between gap-2 ">
                  <div className=" flex flex-row items-center gap-2 ">
                    <button className=" w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center text-black ">
                      <span className="material-symbols-outlined">speaker</span>
                    </button>

                    <h2 className=" font-light text-sm ">
                      Click to load the conversation.
                    </h2>
                  </div>
                  <button className=" border px-4 py-2 rounded-3xl hover:bg-gray-300 hover:shadow-lg transition-all ">
                    <h2 className=" text ">Send</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" px-5 py-2  ">
            <h2 className=" text-gray-700 my-2 ">My Notes</h2>

            <div className=" w-full  my-2  ">
              <button className=" flex flex-row items-center justify-center gap-2 w-full border rounded-xl my-2 py-2 text-gray-700 hover:bg-gray-100 hover:shadow-lg transition-all  ">
                <span className="material-symbols-outlined text-sm">add</span>{" "}
                <h2 className=" text-sm ">Add note</h2>
              </button>

              <div className=" grid grid-cols-2 gap-x-3 gap-y-2 ">
                <button className=" flex flex-row items-center justify-center gap-3 w-full border rounded-xl py-2 text-gray-700 hover:bg-gray-100 hover:shadow-lg transition-all  ">
                  <span className="material-symbols-outlined text-sm">
                    menu_book
                  </span>{" "}
                  <h2 className=" text-sm ">Study guide</h2>
                </button>
                <button className=" flex flex-row items-center justify-center gap-3 w-full border rounded-xl py-2 text-gray-700 hover:bg-gray-100 hover:shadow-lg transition-all  ">
                  <span className="material-symbols-outlined text-sm">
                    book_5
                  </span>{" "}
                  <h2 className=" text-sm ">Breifing doc</h2>
                </button>
                <button className=" flex flex-row items-center justify-center gap-3 w-full border rounded-xl py-2 text-gray-700 hover:bg-gray-100 hover:shadow-lg transition-all  ">
                  <span className="material-symbols-outlined text-sm">
                    summarize
                  </span>{" "}
                  <h2 className=" text-sm ">Summary</h2>
                </button>
                <button className=" flex flex-row items-center justify-center gap-3 w-full border rounded-xl py-2 text-gray-700 hover:bg-gray-100 hover:shadow-lg transition-all  ">
                  <span className="material-symbols-outlined text-sm">
                    quiz
                  </span>{" "}
                  <h2 className=" text-sm ">Practice Questions</h2>
                </button>
              </div>
            </div>

            <div className=" flex flex-col gap-3 py-3 ">
              <div className=" flex flex-row gap-3 hover:bg-slate-200 hover:cursor-pointer rounded-xl py-2 ">
                <span className="material-symbols-outlined text-orange-300 text-3xl">description</span>
                <div className=" flex flex-col gap-1 ">
                  <h1>Software Engineering Study Guide</h1>
                  <h2 className=" text-sm text-gray-600 ">
                    Why is software engineering essential to society? Software
                    is essential to society because more more more
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
