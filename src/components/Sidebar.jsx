import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaWallet } from 'react-icons/fa';
import Logo from './Logo';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { HiMiniChartPie } from 'react-icons/hi2';
import { HiOutlineMail } from 'react-icons/hi';
import { TiUserOutline } from 'react-icons/ti';
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <Logo />
      </div>

      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to="/Dashboard" className="nav-link" data-tooltip="Dashboard">
            <RiBarChartBoxLine className="sidebar-icon" />
            <span className="sidebar-text">Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" data-tooltip="Statistics">
            <HiMiniChartPie className="sidebar-icon" />
            <span className="sidebar-text">Statistics</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Wallet" className="nav-link" data-tooltip="Wallet">
            <FaWallet className="sidebar-icon" />
            <span className="sidebar-text">Wallet</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/messages" className="nav-link" data-tooltip="Messages">
            <HiOutlineMail className="sidebar-icon" />
            <span className="sidebar-text">Messages</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link" data-tooltip="Profile">
            <TiUserOutline className="sidebar-icon" />
            <span className="sidebar-text">Profile</span>
          </NavLink>
        </li>
      </ul>

      <div className="logout-container">
        <NavLink to="/logout" className="nav-link logoutnav" data-tooltip="Logout">
          <HiOutlineLogout className="sidebar-icon" />
          <span className="sidebar-text">Logout</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
