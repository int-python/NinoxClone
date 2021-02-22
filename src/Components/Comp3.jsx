import React from 'react'
import './Comp3.css';
import { Card, CardContent} from '@material-ui/core';
import feature1 from '../Assets/feature1.svg'
import feature2 from '../Assets/feature2.svg'
import feature3 from '../Assets/feature3.svg'
import feature4 from '../Assets/feature4.svg'


function Comp3() {
    return (
        <div class="comp3">
            <div class="cardfeature1" data-aos-duration="300" data-aos="zoom-in">
                <Card class="card">
                    <CardContent>
                        <div class="feature1">
                            <img src={feature1} />
                            <div>
                                <h4>Fully customizable</h4>
                                <p>With just a few clicks, you can create forms, views and <br/>graphs without any limitations. Make it a perfect fit for <br/>your business.</p>
                            </div>    
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div class="feature234">
                <div data-aos="zoom-in" data-aos-duration="300">
                    <Card class="card">
                        <CardContent>
                            <div class="feature2">
                                <img src={feature2} />
                                <div>
                                    <h4>Manage your <br/>workflow</h4>
                                    <p>View and organize anything <br/>the way you want. Store, <br/>filter, sort, group and <br/>visualize your data.</p>
                                </div>    
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div data-aos="zoom-in" data-aos-duration="400">
                    <Card class="card">
                        <CardContent>
                            <div class="feature3">
                                <img src={feature3} />
                                <div>
                                    <h4>Create reports and <br/>visualize data</h4>
                                    <p>Ninox handles a vast amount<br/>of data effortlessly. Choose<br/>from different views like <br/>Kanban, Gantt, Cards and <br/>Diagrams to visual your <br/>results.</p>
                                </div>    
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div data-aos="zoom-in" data-aos-duration="500">
                    <Card class="card">
                        <CardContent>
                            <div class="feature4">
                                <img src={feature4} />
                                <div>
                                    <h4>Get started right <br/>away with <br/>templates</h4>
                                    <p>No need to start from scratch. <br/>Our community created <br/>customizable templates for a <br/>huge variety of scenarios.</p>
                                </div>    
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>   
        </div>
    )
}

export default Comp3
