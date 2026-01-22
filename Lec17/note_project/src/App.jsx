import { useState } from "react";
import { X } from "lucide-react";
const App = () => {
  const [input, setInput] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  const deleteNote = (idx) => {
    const taskCopy = [...task];
    taskCopy.splice(idx, 1);
    setTask(taskCopy);
  };
  const submitHandler = (el) => {
    el.preventDefault();
    const copy = [...task];
    copy.push({ input, detail });
    setTask(copy);
    setInput("");
    setDetail("");
  };
  return (
    <div className=" h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(el) => {
          submitHandler(el);
        }}
        className=" flex items-start flex-col lg:w-1/2 gap-4 p-10"
      >
        <h1 className="text-4xl font-bold">Your Notes</h1>
        <input
          type="text"
          placeholder="Enter note heading"
          className="px-5 py-2  w-full font-medium border-2 rounded outline-none"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <textarea
          type="text"
          placeholder="Enter details"
          className="px-5 py-2 w-full  h-32 font-medium  rounded outline-none flex items-start flex-row border-2"
          value={detail}
          onChange={(e2) => {
            setDetail(e2.target.value);
          }}
        />
        <button className="text-black  w-full bg-white border-2 px-5 py-2 rounded active:bg-gray-500">
          Add Notes
        </button>
      </form>
      <div className=" gap-5 p-5 bg-gray-950 lg:w-1/2 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map((el, idx) => {
            return (
              <div
                key={idx}
                className="relative flex justify-between items-start flex-col h-52 w-40 rounded-2xl bg-white pt-9 pb-4 px-4 over text-black overflow-auto"
              >
                <div>
                  <h3 className="leading-tight font-bold text-lg">
                    {el.input}
                  </h3>
                  <p className="mt-2 leading-tight font-semibold text-xs text-gray-600">{el.detail}</p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full px-1.5 cursor-pointer active:scale-90 py-1 bg-gray-800 rounded text-white font-bold mt-4"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
