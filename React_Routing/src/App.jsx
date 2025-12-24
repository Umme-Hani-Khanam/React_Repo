import { Routes, Route } from "react-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Todos from "./Todos";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
