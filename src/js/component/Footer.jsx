import React from "react";
import PropTypes from "prop-types";
const Footer = () => {
    const footerstyle = {
        color: "white"
    };
  return (
    <footer class="bg-dark text-center text-lg-start" style={footerstyle}>
  
  <div class="text-center p-3">
     Copyright © Your Website 2019 
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  
</footer>
    
  );
};


export default Footer