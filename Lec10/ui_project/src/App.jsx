import Section1 from "./components/section1/section1.jsx";
import Section2 from "./components/section2/secton2.jsx";
const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1618488220787-aaee29f8871f?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1618491558456-9147fe305c2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1738162128615-4e62cbdce086?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1608654768979-c7814ad28b20?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
    },
  ];
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
