import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
        <Link to="/" className="link">About</Link>
        </li>

        <li>
          <Link to="/projects" className="link">Projects</Link>
        </li>

        <li>
          <Link to="/certificates" className="link">Certificates</Link>
        </li>
        <li>
          <Link to="/blogs" className="link">Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export { Header };
