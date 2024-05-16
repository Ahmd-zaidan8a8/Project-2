import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link
        target="_blank"
        to="https://github.com/Ahmd-zaidan8a8/Project-2.git"
      >
        <FaGithub color="white" size={30} />
      </Link>
    </div>
  );
};

export default Footer;
