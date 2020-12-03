import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "./HeaderTwo.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function HeaderTwo() {
  const [{ user }] = useStateValue();
  const [{ state, dispatch }] = useStateValue();

  // const signOut = () => {
  //   dispatch({
  //     type: "SET_USERNULL",
  //   });
  //   console.log("Hiiii", user);
  // };

  return (
    <div className="headerTwo">
      <div className="headerTwo__left">
        {/* <img src={logo} alt="" /> */}
        <Link className="headerTwo__logo" to="/">
          <h2>Bengal</h2>
        </Link>
        <span>CarRental</span>
      </div>
      <div className="headerTwo__middle">
        <Link className="headerTwo__middleItem" to="/">
          <p>Home</p>
        </Link>

        <p>Service</p>
        <p>About</p>
        <Link className="headerTwo__middleItem" to="/rentcar">
          <p>OurCars</p>
        </Link>
        <Link className="headerTwo__middleItem" to="/signin">
          {user === null ? <p>SignIn</p> : <p>SignOut</p>}
        </Link>
        <Link className="headerTwo__middleItem" to="/admin">
          {user?.isAdmin === true ? <p>Admin</p> : <p></p>}
        </Link>

        {/* <SearchIcon className="headerTwo__middleSearchIcon" /> */}
      </div>
      <div className="headerTwo__right">
        <div className="headerTwo__rightSearch"></div>
        <Link className="headerTwo__rightButton" to="/rentcar">
          <button>Rent a Car</button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderTwo;
