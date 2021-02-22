import React from 'react'
import './Comp1_1.css';
import Comp1_1p1 from '../Assets/Comp1_1p1.png'


function Comp1_1() {
    return (
        <div>
            <div class="comp1_1">
                <h1>Automate business processes with Ninox</h1>
                <p>Move from paper and spreadsheets to collabrative plateform, that is easy to customize</p>
                <button type="button" class="btn btn-primary">START FREE TRIAL</button>
            </div>
            <img src={Comp1_1p1} />
        </div>
    )
}

export default Comp1_1
