import React from 'react';
import { connect, useDispatch } from "react-redux";
import './navBar.scss';
import { NavLink } from "react-router-dom";
import { openNavBar } from "../../../actions/actions";

function NavBar(props) {
    function OpenNav() {
        dispatch(openNavBar(false));
        // document.getElementById("mySidenav").style.width = "0";
    }
    function closeNav() {
        dispatch(openNavBar(false));
    }
    var className = props.common.navOpen ? 'sidenav showNav' : 'sidenav';
    const dispatch = useDispatch();
    return (
        <div id="mySidenav" className={className}>
            <span className="closebtn" onClick={() => OpenNav()}>
                &times;
            </span>
            <NavLink onClick={closeNav} to="/html">HTML</NavLink>
            <NavLink onClick={closeNav} to="/html5">HTML5</NavLink>
            <NavLink onClick={closeNav} to="/css">CSS</NavLink>
            <NavLink onClick={closeNav} to="/bootstrap">Bootstrap</NavLink>
            <NavLink onClick={closeNav} to="/js">JS</NavLink>
            <NavLink onClick={closeNav} to="/angular">Angular</NavLink>
            <NavLink onClick={closeNav} to="/react">React</NavLink>
            <NavLink onClick={closeNav} to="/unittest">Unit Test</NavLink>
        </div>
    )
}
const mapStateToProps = ({ ui, common }) => {
    return {
      common: common,
    };
  };
  
  const mapDispatchToProps = {
    openNavBar
  };
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);