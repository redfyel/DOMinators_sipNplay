import React from "react";
import { Link } from "react-router-dom";
import { GiBoba } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { BsCalendar2Check } from "react-icons/bs";
import { RiInformation2Line } from "react-icons/ri";
import './header.css'
function Header() {
  return (

    <div className="header p-3">
      <div className="img float-start mb-3" id="logo">
       <Link to="home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_LEzAtGEJchRFcNvkNWfWe6n49Nt-59VI8QBOwJHOQkuBYoex5-LmxdtbNtxYcGQ8gI&usqp=CAU"  width="70px" className="mb-3"/></Link>
       </div>
      <ul className="nav justify-content-end gap-5 fs-4" id="hed">
      
        <li className="nav-item text-dark ">
          <Link to="about" className="nav-link  text-dark  "><RiInformation2Line /> About</Link>
        </li>
        <li className="nav-item ">
          <Link to="events" className="nav-link text-dark   "><BsCalendar2Check /> Events</Link>
        </li>
        <li className="nav-item ">
          <Link to="menu" className="nav-link  text-dark  "><GiBoba className="fs-2"/>Menu</Link>
        </li>
        <li className="nav-item">
          <Link to="register" className="nav-link  text-dark "><FiLogIn /> Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
