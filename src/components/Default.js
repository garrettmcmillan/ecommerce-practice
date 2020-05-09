import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-green pt-5">
                        <h1 className="text-title"> Oh Shoot!</h1>
                        <h4>The requested page was not found</h4>
                        <div className="my-5">
                        <Link to="/aesthetic" className="button-link" style={{textDecoration: 'none'}} >
                                <ButtonContainer btn >
                                    go to aesthetic
                                </ButtonContainer>
                            </Link>
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}
