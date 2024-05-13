import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Info from "./components/Info";

const App = () => {
  return (
    <div>
      <Navbar />

      <Sidebar />

      {/* <Info /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
