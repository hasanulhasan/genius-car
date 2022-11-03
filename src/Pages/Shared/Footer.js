import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-28 bg-base-200 text-base-content">
        <div>
          <img width="70" height="60" viewBox="0 0 24 24" src='https://cdn-icons-png.flaticon.com/512/744/744465.png'></img>
          <p>Genius Car<br />Edwin Diaz is a software and web <br />technologies engineer, a life coach<br /> trainer who is also a serial .<br /><br />
            Popular car brand since 1992</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href='/' className="link link-hover">Branding</a>
          <a href='/' className="link link-hover">Design</a>
          <a href='/' className="link link-hover">Marketing</a>
          <a href='/' className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href='/' className="link link-hover">About us</a>
          <a href='/' className="link link-hover">Contact</a>
          <a href='/' className="link link-hover">Jobs</a>
          <a href='/' className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href='/' className="link link-hover">Terms of use</a>
          <a href='/' className="link link-hover">Privacy policy</a>
          <a href='/' className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;