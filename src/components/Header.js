import React, { useContext, useState } from 'react';
import ApiContext from '../ApiContext';
import logo from '../Assets/logo.png';
import Avatar from '../Assets/avatar.png';
import { FaCaretDown } from 'react-icons/fa';
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  const { setSearchQuery } = useContext(ApiContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  return (
    <header className="header">
      <div className="logo">
      <img src={logo} width='150px' alt='logo '/>
      </div>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by product name..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="header-right">
        <div className="notification-bell">
          <IoMdNotificationsOutline />
        </div>
        <div className="user-profile">
        <img src={Avatar} alt='logo '/>
        <span className="user-name">Deko</span>
          <FaCaretDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
