import React from 'react';
import "./navbar.css";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup")
  }

  const handleLoginClick = () => {
    navigate("/login")
  }

  const handleLogoClick = () => {
    navigate("/")
  }

  return (
    <div>
      <nav className="menu-content navbar fixed top-0 left-0 w-full z-20">
        <div className="menu flex justify-between items-center p-3 ">
          <h2 id="logo" className="text-3xl ml-4 cursor-pointer" onClick={handleLogoClick}>WayClient</h2>

            <div className="textos flex">
              <h3 className="link text-inherit border-2 py-1.5 px-3 border-white rounded-3xl hover:text-#379E53 hover:bg-white" onClick={handleLoginClick}>Login</h3>
              <h3 id={"cadastre"} className="link text-inherit  hover:text-white" onClick={handleSignupClick}>Cadastre-se</h3>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar;