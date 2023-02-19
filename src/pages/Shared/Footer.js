import React from "react";

import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer style={{
        background: `url(${footer})`,
        backgroundSize: 'cover'
    }} className="p-10">
        <div className='footer m-5'>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a href="https://www.facebook.com/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href="https://www.facebook.com/" className="link link-hover"> Facebook</a>
                <a href="https://twitter.com/home" className="link link-hover"> Twiter</a>
                <a href="https://www.linkedin.com/feed/" className="link link-hover">LinkedIn </a>
                
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </div>
        <div className='my-10 text-center'>
            <p>Copyright © 2023 - All right reserved </p>
        </div>
    </footer>
);
};

export default Footer;
