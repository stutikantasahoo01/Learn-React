import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Notfound from "./Pages/Notfound";
import Men from "./Pages/Men";
import Woman from "./Pages/Woman";
import Kids from "./Pages/Kids";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";
import Nav2 from "./components/Nav2";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Nav2/>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/courses/:Courseid" element={<CourseDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="woman" element={<Woman />} />
          <Route path="kids" element={<Kids />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
