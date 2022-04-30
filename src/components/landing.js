import React from 'react';
import { Jumbotron } from 'reactstrap'

const Landing = () => (
    <Jumbotron 
        className="col-xs-12 offset-sm-2 col-sm-8 offset-md-3 col-md-6 offset-lg-3 col-lg-6 jumbotron">
        <h5 className="text-center display-3">Welcome to the XYZ Hospital Management System</h5>
        <p className="lead" style={{textAlign:'center'}}>
            XYZ HOSPITAL
        </p>
        <hr className="my-2" />
        <p>To get started, select a module on the navigation bar.</p>
    </Jumbotron>
)

export default Landing;