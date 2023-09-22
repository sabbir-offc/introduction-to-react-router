import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto my-5 text-center">
      <h4 className="text-3xl">Navbar</h4>
      <nav className="space-x-5 tabs tabs-boxed text-center ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "tab" : isActive ? "tab tab-active" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isPending ? "tab" : isActive ? "tab tab-active" : ""
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive, isPending }) =>
            isPending ? "tab" : isActive ? "tab tab-active" : ""
          }
        >
          Posts
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "tab" : isActive ? "tab tab-active" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact "
          className={({ isActive, isPending }) =>
            isPending ? "tab" : isActive ? "tab tab-active" : ""
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
