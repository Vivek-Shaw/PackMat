import React from "react";
import { pageLinks, socialLinks, footerContact, quickLinks } from "../data";

import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="primary-footer">
        <div className="column1">
          <div className="company-logo">
            <img src={logo} alt="logo" className="logo" />
            <hr className="solid"></hr>
            <div>
              <ul className="social-icons-footer">
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
          </div>
        </div>
        <div className="column2">
          <h2 className="comp-name">PackMat</h2>
          <h5 className="comp-name">Supply Chain Solution</h5>
        </div>
        <div className="column3">
          <div className="content-head">
            <h5>Quick Links</h5>
            <hr className="underline" />
          </div>

          <div className="content">
            <ul>
              {quickLinks.map((quicklink) => {
                const { id, url, text } = quicklink;
                return (
                  <li key={id} className="quickLink">
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="column4">
          <div className="content-head">
            <h5>reach us at</h5>
            <hr className="underline" />
          </div>
          <div className="content">
            <ul className="contact">
              {footerContact.map((contact) => {
                return (
                  <li key={contact.id} className="inner-contact">
                    <div>{contact.icon}</div>
                    <div>{contact.text}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="secondary-footer">
        <hr className="solid"></hr>
        <div className="copyright">
          <p>
            Copyright &copy; PackMat Supply Chain Solution
            <span id="date"> {new Date().getFullYear()}</span>. all rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
