import React, { Component } from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HomePage = styled.div`
    background: var(--mainWhite) !important;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .home-info {
        color: var(--mainGreen) !important;
        font-size: 1.4rem;
        padding: 0 3rem 0 3rem;
    }
    .home-info-two {
        padding: .5rem 0 .5rem 0;
        font-size: 1rem !important;
    }
    .bottom-link {
        border: 1px solid red;
        text-decoration: none;
        font-size: 1rem;
    }
`

export default class Home extends Component {
    render() {
        return (
        <HomePage >
            <div className="home-info text-center mx-auto d-block mt-5 ">
                    <span className="text-title">My Generic Aesthetic.</span> is a collection of personal favorites and a reflection of my style
                <div className="home-info-two">
                    Never take yourself too serious while learning something new
                </div>
                {/* <div className="home-link"> 
                <Link to="/about" style={{textDecoration: 'none'}} >
                            <div className="home-img">
                                <img src={logo} className="mx-auto d-block" alt="store" />
                            </div>
                </Link>
                </div>  */}
            </div>
            
        </HomePage>
        )
    }
}