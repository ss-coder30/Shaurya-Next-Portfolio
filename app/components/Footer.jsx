import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return (
      <footer className=" py-4 border border-top-[#33353f] border-l-transparent border-r-transparent border-b-transparent">
        <div className="container">
          <p className="text-white text-center">
            Copyright &copy; {year} | All rights reserved
          </p>
        </div>
      </footer>
    );
}

export default Footer;