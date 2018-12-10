import React from 'react';

const Footer = ({copy}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">&copy; {copy}</a>
    </nav>
  );
}

export default Footer;