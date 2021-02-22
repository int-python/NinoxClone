import React from 'react'
import './Comp2.css';
import "swiper/swiper-bundle.css";
import Card1 from "./cards/Card1";
import Card2 from "./cards/Card2";
import Card3 from "./cards/Card3";
import app from '../Assets/app.svg'
import invite from '../Assets/invite.svg'
import location from '../Assets/location.svg'

function Comp2() {
    
    return (
        <div class="comp2">
            <div data-aos="flip-left" data-aos-duration="300">
                <div class="com">
                    <h2>How our customers use Ninox</h2>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="1000">
                            <Card1 />
                        </div>
                        <div class="carousel-item" data-interval="1000">
                            <Card2 />
                        </div>
                        <div class="carousel-item" data-interval="1000">
                            <Card3 />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only"></span>
                    </a>
                </div>
               
                <div class="comp2bott">
                    <div class="img_app">
                        <img src={app} />
                        <h5>Build Custom Apps</h5>
                        <p>Drag & drop to quickly arrange <br />forms, charts and reports.</p>
                    </div>
                    <div class="img_invite">
                        <img src={invite} />
                        <h5>Invite your team</h5>
                        <p>All your data in a central, smart <br />workspace - no communication <br/>overhead.</p>
                    </div>
                    <div class="img_location">
                        <img src={location} />
                        <h5>Work from anywhere</h5>
                        <p>Ninox runs on all your devices -<br/>with or without internet <br/>connectivity.</p>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Comp2
