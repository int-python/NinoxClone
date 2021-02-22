import React from 'react'
import nix1_1 from '../Assets/nix1_1.png';
import './Comp1.css';
import Logo1 from '../Assets/Logo1.png'
import Logo2 from '../Assets/Logo2.png'
import Logo3 from '../Assets/Logo3.png'
import Logo4 from '../Assets/Logo4.png'
import Logo5 from '../Assets/Logo5.png'



function Comp1() {
    return (
        <div>
            <div class="container" >
                <div class="left">
                    <h1>Automate business processes with Ninox</h1>
                    <p>Move from spreadsheets to a collaborative platform,<br /> that is easy to customize.</p>
                    <button class="btnn btn-lg btn-primary" type="submit"> Start free 30-day trial </button>
                    <p class="par">NO CREDIT CARD REQUIRED</p>
                </div>
                <div class="right">
                    <img class="eye" width={600} height={535}src={nix1_1} />
                </div>
            </div>
            <div class="bott">
                <span>TRUSTED BY</span>
                <img class="logo1" src={Logo1} />
                <img class="logo2" src={Logo2} />
                <img class="logo3" src={Logo3} />
                <img class="logo4" src={Logo4} />
                <img class="logo5" src={Logo5} />
            </div>
        </div>    
    )
}

export default Comp1
