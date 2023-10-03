import logo from '../assets/logo.svg';
import { FaBars } from 'react-icons/fa';
import React,{useState,useRef} from 'react'

import { pageLinks,socialLinks } from '../data';




const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinks=()=>{
        setShowLinks(!showLinks);
    }
   const linkStyle = {
     height: showLinks
       ? `${linksRef.current.getBoundingClientRect().height}px`
       : "0px",
   };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="packmat" className="nav-logo" />
          <h4>
            pack<span className='cpm-name'>Mat</span> Supply Chain Solution
          </h4>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyle}
        >
          <ul className="links" ref={linksRef}>
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {socialLinks.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;