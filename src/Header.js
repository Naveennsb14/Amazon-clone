import { NavLink } from "react-router-dom";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
export const Header = () => {
  const [{basket}] = useStateValue();
  return (
    <nav className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578"
          alt="amazon-logo"
        />
      </NavLink>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <NavLink to="/login" className="header__link">
          <div className="header__option">
            <span className="headeroption__lineOne">Hello Naveen</span>
            <span className="headeroption__lineTwo">Sign In</span>
          </div>
        </NavLink>
        <NavLink to="/login" className="header__link">
          <div className="header__option">
            <span className="headeroption__lineOne">Returns </span>
            <span className="headeroption__lineTwo">& Orders</span>
          </div>
        </NavLink>
        <NavLink to="/login" className="header__link">
          <div className="header__option">
            <span className="headeroption__lineOne">Your </span>
            <span className="headeroption__lineTwo">Prime</span>
          </div>
        </NavLink>

        <NavLink to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="headeroption__lineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};
