import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{fontFamily: "'Source Sans Pro', sans-serif;"}} className="header">
      <Link style={{ textDecoration: "none" }} className="logo" to={""}>
        conduit
      </Link>
      <div className="nav">
        <Link
          style={{ textDecoration: "none" }}
          className="nav-item"
          to={"/home"}
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          className="nav-item"
          to={"/signin"}
        >
          Sign in
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          className="nav-item"
          to={"/signup"}
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Header;
