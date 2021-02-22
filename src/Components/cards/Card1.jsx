import React from 'react'
import { Card, CardContent} from '@material-ui/core';
import './Cardall.css';
import card1p1 from './Assets/card1p1.png'
import card1p2 from './Assets/card1p2.png'



function Card1() {
    return (
        <div>
            <Card class="card123">
                <CardContent>
                    <div  class="cardmain">
                        <div class="lef">
                            <h6>#database  #hrm  #flexibility  #realtimesync</h6>
                            <h2>Database adapted to <br/>specific processes and local regulations</h2>
                            <img src={card1p1} />
                            <span><b>Martin Baeuerle,</b></span>
                            <p>Office Manager @Cundall</p>
                            <button class="btnn btn-lg btn-outline-primary" type="submit">Learn more</button>

                        </div>
                        <div class="righ">
                            <img src={card1p2} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Card1
