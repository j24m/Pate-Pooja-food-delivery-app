import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="flex justify-between items-center bg-white p-2.5 shadow-md rounded-t-md">
      <h1 className="text-purple-shade-1 text-4xl lg:text-5xl text-shadow-without-hover font-bold p-2.5 ml-2.5 hover:text-shadow-on-hover">
        <a href="#">Pate Pooja</a>
      </h1>
      <ul className="flex text-primary font-bold text-xl gap-10 p-2.5 mr-2.5">
        {/* <li className="position-relative">
            <input type="text" placeholder="Search" />
            <a
              style={{
                display: "flex",    
                gap: "1rem",
                "align-items": "start",
              }}
              href="#"
            >
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m18.9 20.3l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275t-.7-.275ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
                />
              </svg>
            </a>
          </li> */}
        <li className="block md:hidden">
          <button>
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </li>
        <li className="hidden md:block hover:text-purple-shade-1">
          <Link to="/Menu">Menu</Link>
        </li>
        <li className="hidden md:block hover:text-purple-shade-1">
          <Link to="/">Cart</Link>
        </li>
        <li className="hidden md:block hover:text-purple-shade-1">
          <Link to="/login">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
