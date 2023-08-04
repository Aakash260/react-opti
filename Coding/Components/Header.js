import { useState } from "react";
 
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
  import useOnline from "../Hooks/useOnline";
import { useSelector } from "react-redux";
  
  
// Title component for display logo
const Title = () => {
  const isConnected=useOnline()
  
  return<><a href="/">
    <img
      className="logo"
      src="https://user-assets.sxlcdn.com/images/60446/Fj4zyXl_IJY6hvAxpnk_lhXuQopJ.jpg?imageMogr2/strip/auto-orient/thumbnail/1200x630%3E/quality/90!/interlace/1/format/jpg"
      alt="Food Fire"
      title="Food Fire"
    />
  </a>
  {isConnected?"🟢Live":"🔴OffLine"}
 </>
}

// Header component for header section: Logo, Nav Items
const Header = () => {
  const token = localStorage.getItem("token");
  
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(
    token?.length === 100 ? true : false
  );
  const navigate = useNavigate();
const cardItems=useSelector(store=>store.cart.items);
  
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
           
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.clear();
                  setIsLoggedin(!isLoggedin);
                }}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
