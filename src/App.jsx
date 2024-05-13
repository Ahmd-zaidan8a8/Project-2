import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import LoggedIn from "./pages/LoggedIn";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* <Sidebar /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoggedIn />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
};

export default App;
