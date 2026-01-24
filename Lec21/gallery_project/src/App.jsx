import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
const App = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  async function getData() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setData(response.data);
  }

  let printUser = (
    <h3 className="text-black text-3xl font-medium absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      Loading...
    </h3>
  );

  if (data.length > 0) {
    printUser = data.map((elem, idx) => {
      return (
        <div key={idx} className=" bg-gray-600 text-white p-5 rounded-xl">
          <Card elem={elem} />
        </div>
      );
    });
  }

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="  text-white p-4">
      <div className="flex flex-wrap gap-4">{printUser}</div>
      <div className="flex items-center gap-4 justify-center cursor-pointer">
        <button
          style={{ opacity: index == 0 ? 0.5 : 1 }}
          className="bg-emerald-500 px-10 py-2 rounded font-medium mt-5 active:scale-90 cursor-pointer"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
              setData([]);
            }
          }}
        >
          Prev
        </button>
        <h4 className="bg-emerald-500 px-10 py-2 rounded font-medium mt-5">
          Page-{index}
        </h4>
        <button
          className="bg-emerald-500 px-10 py-2 rounded font-medium mt-5 active:scale-90 cursor-pointer"
          onClick={() => {
            setIndex(index + 1);
            setData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;

{
  /* <button
        onClick={getData}
        className="bg-green-500 px-5 py-2 rounded text-white active:scale-95 mb-3"
      >
        Get Data
      </button> */
}
