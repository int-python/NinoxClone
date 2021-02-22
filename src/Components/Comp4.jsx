import React from 'react'
import './Comp4.css';
import { Card, CardContent} from '@material-ui/core';
import  support_illustration  from '../Assets/support_illustration.svg'


function Comp4() {
    return (
        <div class="comp4">
            <div data-aos="zoom-in-up" data-aos-duration="300">
                <Card >
                    <CardContent>
                        <div class="illustration">
                            <div class="illustration_left">
                                <h2>Over 250,000 people <br/>use Ninox. Join our <br/>community!</h2>
                                <button class="btnn btn-lg btn-primary" type="submit"> Start free 30-day trial </button>
                            </div>
                            <div class="illustration_right">
                                <img src={support_illustration}/>
                            </div>
                        </div>    
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Comp4
