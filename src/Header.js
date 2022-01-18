import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span>
            {" "}
            <div className="header_optionLineOne">Hello Guest</div>
          </span>

          <span>
            <div className="header_optionLineTwo">Sign In</div>
          </span>
        </div>
        <div className="header_option">
          <span>
            {" "}
            <div className="header_optionLineOne">Returns</div>
          </span>

          <span>
            <div className="header_optionLineTwo">& Orders</div>
          </span>
        </div>
        <div className="header_option">
          <span>
            {" "}
            <div className="header_optionLineOne">Yours</div>
          </span>

          <span>
            <div className="header_optionLineTwo">Prime</div>
          </span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header_optionLineTwo Header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
