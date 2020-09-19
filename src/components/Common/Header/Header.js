import React from "react";
import { connect, useDispatch } from "react-redux";
import "./Header.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import GoogleBtn from "../../Public/GoogleSignIn";
import NavBar from "../../Common/NavigationBar/navBar";
import { openNavBar } from "../../../actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  function openNav() {
    dispatch(openNavBar(true));
    // document.getElementById("mySidenav").style.width = "250px";
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => openNav()}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <h1 className={classes.title}>
            <Link style={{ textDecoration: "none", color: "White" }} to="/home">
              (IM) - Interview Master
            </Link>
          </h1>
          <NavBar></NavBar>
          <GoogleBtn />
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = ({ ui, common }) => {
  return {
    common: common,
  };
};

const mapDispatchToProps = {
  openNavBar
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
