import {useState} from "react"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import LoggedIn from "./pages/LoggedIn";
import SummaryList from "./pages/SummaryList";


const App = () => {
  const [loginData, setLoginData] = useState({});
  const [userSubmit , setUserSubmit] = useState(false);
  

  return (
    <div>
      <Navbar />

      <Sidebar />

      <Routes>
        <Route path="/" element={<HomePage loginData={loginData} userSubmit={userSubmit}/>} />
        <Route path="/login" element={<LoggedIn setLoginData={setLoginData} setUserSubmit={setUserSubmit}/>} />
        <Route path="/summarylist" element={<SummaryList/>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
