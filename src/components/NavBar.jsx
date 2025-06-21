import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillMessage } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";
import { IoSearchCircleSharp, IoHomeSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { IoAppsSharp } from "react-icons/io5";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { logoutUser } from './store/userSlice';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const location = useLocation();

  const navItems = [
    { path: '/home', icon: <IoHomeSharp className="h-6 w-6" />, label: 'Home' },
    { path: '/myconnections', icon: <BsPeopleFill className="h-6 w-6" />, label: 'My Network' },
    { path: '/myjobs', icon: <PiSuitcaseSimpleBold className="h-6 w-6" />, label: 'Jobs' },
    { path: '/message', icon: <AiFillMessage className="h-6 w-6" />, label: 'Messaging' },
    { path: '/notifications', icon: <RiNotification2Fill className="h-6 w-6" />, label: 'Notifications' },
    { path: '/profile', icon: <img src="/unknown.jpg" alt="Profile" className="h-6 w-6 rounded-full object-cover" />, label: 'Me' },
    { path: '#', icon: <IoAppsSharp className="h-6 w-6" />, label: 'For Business' },
  ];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">

          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img src="/linkedIn-Logos.JPG" alt="LinkedIn Logo" className="w-12 h-12" />
            </Link>
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search"
                className="w-full h-12 pl-9 pr-3 py-1.5 rounded-full border border-gray-300 bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-black-500"
              />
              <IoSearchCircleSharp className="absolute left-2 top-2 h-8 w-8 text-gray-500 mr-3" />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`flex flex-col items-center text-sm transition-colors duration-200 ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {isActive && <span className="w-12 h-1 mt-1 bg-black rounded-full"></span>}
                </Link>
              );
            })}

            <span className="h-10 border-l border-gray-300 mx-4"></span>

            <a href="#" className="text-xs text-yellow-600 hover:underline font-medium">
              Try Premium for ₹0
            </a>
            <div 
                onClick={() => handleLogout()} 
                className="flex flex-col items-center text-sm transition-colors text-[17px] duration-200 cursor-pointer hover:text-gray-600">
                  <IoLogOutOutline className="h-6 w-6" />
                Logout
              </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-600 hover:text-blue-500 focus:outline-none"
            >
              {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
          </div>

        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mx-2 mt-2 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative mb-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-9 pr-4 py-1.5 rounded-full border border-gray-300 bg-gray-100 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <IoSearchCircleSharp className="absolute left-2.5 top-2 h-5 w-5 text-gray-500" />
              </div>

              <Link to="/home" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                <IoHomeSharp className="mr-3 h-5 w-5" /> Home
              </Link>
              <Link to="/myconnections" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                <BsPeopleFill className="mr-3 h-5 w-5" /> My Network
              </Link>
              <Link to="/myjobs" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                <PiSuitcaseSimpleBold className="mr-3 h-5 w-5" /> Jobs
              </Link>
              <Link to="/message" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                <AiFillMessage className="mr-3 h-5 w-5" /> Messaging
              </Link>
              <Link to="/notifications" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                <RiNotification2Fill className="mr-3 h-5 w-5" /> Notifications
              </Link>
              <Link to="/profile" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                <img src="/unknown.jpg" alt="Profile" className="mr-3 h-5 w-5 rounded-full" /> Me
              </Link>
              <Link to="#" className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={() => setMenuOpen(false)}>
                <IoAppsSharp className="mr-3 h-5 w-5" />For Business
              </Link>
              <a href="#" className="block px-3 py-2 text-sm text-yellow-600 hover:underline font-medium">
                Try Premium for ₹0
              </a>
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50">
                Logout
              </button>
            </div>
          </div>
        )}
     
    </nav>
  );
};

export default NavBar;
