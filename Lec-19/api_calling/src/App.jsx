import axios from "axios";
import { useState } from "react";

const App = () => {
  // async function getData() {
  //   const response =await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //   console.log(response);

  // }

  // const getData = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos",
  //   );
  //   const data = await response.json();
  //   console.log(data);

  // };

  // const getData =async () => {
  //   const{data} =await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  //   console.log(data);

  // };
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    console.log(data);
  };
  getData();
  return (
    <div>
      {data.map((el, idx) => {
        return (
          <div key={idx}>
            <h4>Author :{el.author}</h4>
            <h4>Download-URl:{el.download_url}</h4>
            <h4>id:{el.id}</h4>
            <img src={el.url} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default App;
