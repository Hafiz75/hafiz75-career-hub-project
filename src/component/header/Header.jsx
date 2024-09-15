import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar px-[120px] mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
               <li>
              <Link to='/'><a>Home</a></Link>
            </li>
              <li>
              <Link to='/appliedJob'><a>Applied Job</a></Link>
            </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl p-0">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
              <Link to='/'><a>Home</a></Link>
            </li>
            <li>
              <Link to='/appliedJob'><a>Applied Job</a></Link>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="px-6 py-4 rounded-lg bg-[linear-gradient(90deg,#7E90FE_0%,#9873FF_100%)] text-white text-lg font-bold">
            Start Applying
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
