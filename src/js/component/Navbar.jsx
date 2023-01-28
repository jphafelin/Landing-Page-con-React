import React from "react";

const Navbar = () => {
	
	return (
		
		
<nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid fixed-top">
  <div className="container-fluid row justify-content-between">
  <a class="navbar-brand col-4">Start Bootstrap</a>
    <button className="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>    
    <div className="collapse navbar-collapse col-4 justify-content-end" id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
		<li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
		
	);
};

export default Navbar;