import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className="d-flex justify-content-evenly navbar navbar-light p-2 bg-info border border-1 border-dark">
      <Link className="nav-link text-white fw-bold" to="/">Home</Link> |
      <Link className="nav-link text-white fw-bold" >About us</Link> |
      <Link className="nav-link text-white fw-bold" to="summarylist">Meal Summary</Link> |
      <Link className="nav-link text-white fw-bold" to="login">Login</Link>
      
    </nav>

  )
};

export default Navbar;
