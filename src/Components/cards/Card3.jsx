import React from 'react'
import { Card, CardContent} from '@material-ui/core';
import './Cardall.css';
import card3p1 from './Assets/card3p1.png'
import card3p2 from './Assets/card3p2.png'


function Card3() {
    return (
        <div>
            <Card class="card123">
                <CardContent>
                    <div  class="cardmain">
                        <div class="lef">
                            <h6>#database #operationsmanagement #gdpr #email</h6>
                            <h2>Comprehensive application <br />for managing operations</h2>
                            <img src={card3p1} />
                            <span><b>Yorick Van der Walt,</b></span>
                            <p>HSEQ Manager @MMB Surfacing Ltd</p>
                            <button class="btnn btn-lg btn-outline-primary" type="submit">Learn more</button>

                        </div>
                        <div class="righ">
                            <img src={card3p2} />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Card3
