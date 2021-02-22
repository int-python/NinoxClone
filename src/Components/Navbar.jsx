import React from 'react'
import Logo from '../Assets/Logo.png'
import './Navbar.css';

function Navbar() {
    return (
        <div class="na">
            <nav class="navbar navbar-expand-lg navbar-light  bg-white">
              <a class="navbar-brand" href="#"><img src={Logo} width="82" height="auto" alt="" /></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Product
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Platforms</a>
                      <a class="dropdown-item" href="#">Templates</a>
                      <a class="dropdown-item" href="#">Security</a>
                      <a class="dropdown-item" href="#">Success Stories</a>
                      <a class="dropdown-item" href="#">Customer Reviews</a>
                      <a class="dropdown-item" href="#">Product Updates</a>
                    </div>
                  </li>  
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Partner
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Partner</a>
                      <a class="dropdown-item" href="#">Become Our Partner</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Support
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Help Center</a>
                      <a class="dropdown-item" href="#">Webinars</a>
                      <a class="dropdown-item" href="#">Manual</a>
                      <a class="dropdown-item" href="#">Forum</a>
                      <a class="dropdown-item" href="#">Tutorial Videos</a>
                      <a class="dropdown-item" href="#">Contact us</a>
                    </div>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Contact sales</a>
                  </li>
                </ul>
                <div class="button">
                  <button class="btnn btn-lg btn-outline-primary" type="submit"> Log in </button>
                  <button class="btnn btn-lg btn-primary" type="submit"> Start free trial </button>
                </div>
              </div>
            </nav>
        </div>
    )
}

export default Navbar
