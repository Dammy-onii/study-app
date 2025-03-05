import React, { useState } from "react";
import { useParams } from "react-router";
import notesData from "../data/data";

function Notes() {
  const { id } = useParams();
  const note = notesData.find((item) => item.id === parseInt(id || "0")); // Find the note

  if (!note) {
    return <h1 className="text-center text-2xl">Note not found</h1>;
  }

  const [fileNames, setFileNames] = useState<string[]>([]);
  const [shrinkSources, setShrinkSources] = useState<boolean>(false);

  // Chat and More
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Convert FileList to an array and extract names
      const newFileNames = Array.from(files).map((file) => file.name);
      setFileNames((prev) => [...prev, ...newFileNames]); // Append to existing files
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (inputValue.trim() !== "") {
      setMessages((prev) => [
        ...prev,
        { text: inputValue, isUser: true },
        { text: `You typed in the prompt: "${inputValue}"`, isUser: false },
      ]);
      setInputValue(""); // Clear input after sending
    }
  };

  return (
    <div className=" bg-slate-200 h-screen transition-all ">
      <div className=" w-full px-10 py-5 flex flex-row items-center justify-between ">
        <div className=" flex flex-row items-center gap-2 ">
          {/* <div className=" w-10 h-10 bg-slate-400 "></div> */}
          <h1 className=" myF font-bold ">Study</h1>
          <h1 className=" text-2xl text-gray-800 tracking-wider ">{note.title}</h1>
        </div>
        <div className=" flex flex-row items-center gap-4 ">
          <span className=" w-10 h-10 bg-red-600 rounded-full flex items-center justify-center ">
            <h1 className=" text-2xl text-white ">D</h1>
          </span>
        </div>
      </div>

      <div className=" grid grid-cols-12 gap-3 px-5 h-[85vh] ">
        {/* Sources  */}
        <div
          className={` ${
            shrinkSources ? "col-span-1" : "col-span-2"
          } flex flex-col bg-[#f9f9f9] rounded-lg`}
        >
          <div
            className={` ${
              shrinkSources ? "justify-center" : "justify-between"
            } flex flex-row items-center py-4 px-5 border-b-2 border-slate-200`}
          >
            <h2 className={`${shrinkSources ? " hidden text-center" : "flex"}`}>
              Sources
            </h2>
            <button
              className="material-symbols-outlined flex self-center justify-self-center"
              onClick={() => setShrinkSources(!shrinkSources)}
            >
              dock_to_left
            </button>
          </div>
          <div className="flex flex-col px-5">
            <label className="flex flex-row items-center justify-center gap-2 w-full border rounded-xl my-5 py-2 text-gray-700 cursor-pointer">
              <span
                className={` ${
                  shrinkSources ? "text-xl" : "text-sm"
                } material-symbols-outlined `}
              >
                add
              </span>
              <h2 className={` ${shrinkSources ? "hidden" : "flex"} text-sm`}>
                Add sources
              </h2>
              <input
                type="file"
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
            </label>

            {fileNames.length > 0 && (
              <div className=" flex flex-col gap-2 w-full ">
                {fileNames.map((name, index) => (
                  <div className=" flex flex-row gap-4 justify-center items-center ">
                    <span className="material-symbols-outlined text-3xl text-red-400">
                      picture_as_pdf
                    </span>
                    <h2
                      className={` ${
                        shrinkSources ? "hidden" : "flex"
                      } text-sm text-wrap truncate `}
                      key={index}
                    >
                      {name}
                    </h2>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Chat And More */}
        <div className="h-full col-span-6 flex flex-col bg-[#f9f9f9] rounded-lg relative overflow-y-scroll">
          <div className="flex flex-row justify-between py-4 px-5 border-b-2 border-slate-200">
            <h2>Chat</h2>
          </div>

          {/* Chat Description */}
          <div className="overflow-y-auto pb-32">
            <div className="px-5 py-5">
              <div className="w-20 h-20 flex items-center justify-center">
                <h1 className=" text-6xl ">{note.icon}</h1>
              </div>
              <h1 className="text-2xl font-light my-2">{note.title}</h1>
              <h3 className="text-xs font-medium text-gray-500">
                {note.sources.length}{" "}
                {note.sources.length === 1 ? "source" : "sources"}
              </h3>
              <h2 className="text-sm font-medium text-gray-700 my-2">
                {note.about}
              </h2>
            </div>

            {/* Chat Messages  */}
            <div className=" px-5 py-5 flex flex-col gap-3 ">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg max-w-[80%] ${
                    msg.isUser
                      ? "bg-blue-300 self-end"
                      : "bg-gray-300 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>

          <div className=" absolute bottom-0   w-full px-5 py-3 border-t border-slate-200 bg-[#f9f9f9]">
            <form
              onSubmit={handleSend}
              className="flex items-center gap-2 border rounded-xl px-5 py-2 bg-white"
            >
              <input
                type="text"
                placeholder="Start typing..."
                className="flex-grow border-none bg-inherit outline-none text-gray-700 placeholder:text-gray-700 tracking-wide"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
              />
              <button
                className={`w-12 h-12 ${
                  isActive ? "bg-blue-500" : "bg-blue-300"
                } rounded-full flex items-center justify-center text-white transition-all`}
                type="submit"
              >
                <span className="material-symbols-outlined text-3xl">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Studio And Notes */}
        <div
          className={` ${
            shrinkSources ? "col-span-5" : "col-span-4"
          } flex flex-col bg-[#f9f9f9] rounded-lg relative overflow-hidden `}
        >
          <div className=" flex flex-row justify-between py-4 px-5 border-b-2 border-slate-200 ">
            <h2>Studio</h2>
          </div>
          <div className=" h-full overflow-y-scroll ">
            <div className=" px-5 py-5 border-b-2  ">
              <h2 className=" text-gray-700 my-4 ">Audio Overview</h2>

              <div className=" w-full  my-2  ">
                <div className=" border rounded-xl px-5 py-5  ">
                  <div className=" flex flex-row items-center justify-between gap-2 ">
                    <div className=" flex flex-row items-center gap-2 ">
                      <button className=" w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center text-black ">
                        <span className="material-symbols-outlined">
                          speaker
                        </span>
                      </button>

                      <h2 className=" font-light text-sm ">
                        Click to load the conversation.
                      </h2>
                    </div>
                    <button className=" border px-4 py-2 rounded-3xl hover:bg-gray-300 hover:shadow-lg transition-all ">
                      <h2 className=" text ">Load</h2>
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
                {note.note && note.note.length > 0 ? (
                  note.note.map((noteItem, index) => (
                    <div
                      key={noteItem.id} // Using unique ID for better React performance
                      className=" w-full h-36 flex flex-row gap-3 hover:bg-slate-200 hover:cursor-pointer rounded-xl py-2"
                    >
                      <span className="material-symbols-outlined text-orange-300 text-3xl">
                        description
                      </span>
                      <div className="flex flex-col gap-1 w">
                        <h1 className="text-lg font-medium">
                          {noteItem.title}
                        </h1>
                        <h2 className="text-sm text-gray-600 truncate text-wrap ">
                          {noteItem.about}
                        </h2>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No notes available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
