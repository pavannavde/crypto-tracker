import React, { useEffect, useState } from 'react'
import './styles.css'
import TemporaryDrawer from './drawer';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { Switch }  from '@mui/material';
import { toast } from 'react-toastify';

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className='header'>

       <h1 className='logo'>
        CoinPulse<span style={{color:"var(--blue)"}}>.</span>
        </h1>

       <div className='links'>
        <Switch
        checked={darkMode}
        onClick={() => {
          changeMode();}}
        />
        <Link to='/'>
          <p className='link'>Home</p>
        </Link>
        <Link to='/compare'>
          <p className='link'>Compare</p>
        </Link>
        <Link to='/watchlist'>
          <p className='link'>Watchlist</p>
        </Link>
        <Link to='/dashboard'>
          <Button text={"Dashboard"}  />
        </Link>
       </div>

       <div className='mobile-drawer'>
          <TemporaryDrawer/>
       </div>

    </div>
  )
}

export default Header;
