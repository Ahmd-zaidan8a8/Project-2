import { IoMdFitness } from "react-icons/io";
import { IoFitnessSharp } from "react-icons/io5";


const Navbar = () => {
  return (
      <nav className="navbar justify-content-center" style={{ backgroundColor: "#e3f2fd"}}>
        <div className="d-flex">
          <h1>Calorie Tracker</h1>
        </div>
    <div className="d-flex">
      <IoMdFitness size={40}/>
      <IoFitnessSharp  size={40}/>
    </div>
      </nav>
  );
};

export default Navbar;
