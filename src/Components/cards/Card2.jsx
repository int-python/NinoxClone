import React from 'react'
import { Card, CardContent} from '@material-ui/core';
import './Cardall.css';
import card2p1 from './Assets/card2p1.png'
import card2p2 from './Assets/card2p2.png'



function Card2() {
    return (
        <div>
            <Card class="card123">
                <CardContent>
                    <div  class="cardmain">
                        <div class="lef">
                            <h6>#salesmanagement #customermarketing #gdpr</h6>
                            <h2>Core solution for sales, <br/>implementation and post-<br/>sales support</h2>
                            <img src={card2p1} />
                            <span><b>Kerstin Langdon,</b></span>
                            <p>Discovery Yachts</p>
                            <button class="btnn btn-lg btn-outline-primary" type="submit">Learn more</button>

                        </div>
                        <div class="righ">
                            <img src={card2p2} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Card2
