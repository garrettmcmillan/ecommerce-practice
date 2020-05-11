import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';


const NavWrapper = styled.nav`
    background: var(--mainBlue) !important;
        .nav-link {
        color: var(--mainGreen) !important;
        font-size: 1.3rem;
        letter-spacing: .01rem;
        text-transform: capitalize;
        padding-bottom: 0.2rem;
            &:hover{
                transform: scale(1.01);
            }
            &:focus{
                outline: none;
            }
        }
        .external-link {
            text-decoration: none !important;
            color: inherit;
        }
    }
`
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-md navbar-dark nav-wrapper">
                {/* 
https://www.iconfinder.com/icons/1046674/arabica_barista_coffea_coffea_arabica_coffee_coffee_plant_plant_icon
Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <span className="link-container col-sm-4"> 
                    <ul className="navbar-nav">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                home
                            </Link>
                        </li>
                        <li className="nav-item nav-link ml-5">
                            <a className="external-link" target="_blank" href="http://www.linkedin.com/in/garrettmcmillan" rel="noopener noreferrer">
                                about
                            </a>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/aesthetic" className="nav-link products">
                                aesthetic
                            </Link>
                        </li>
                    </ul>
                </span>
                <span className="logo-container col-sm-4" >
                    <Link className="" to="/" style={{textDecoration: 'none'}} >
                        <span className="logo-title">
                            <span>
                                <img src={logo} className="mx-auto d-block py-3" alt="store" />
                            </span>
                            <div className="logo-text">
                            Generic Aesthetic.
                            </div>
                        </span>
                    </Link>
                </span>
                <span className="button-container col-sm-4">
                    <Link to="/truckload" className="button-link" style={{textDecoration: 'none'}} >
                        <ButtonContainer className="cart-button mr-3" >
                            <span className="hide-it">my truckload</span>
                            <span className="ml-2 sm-fix">
                                <i className="fas fa-truck-monster" />
                            </span> 
                        </ButtonContainer>
                    </Link>
                </span>
            </NavWrapper>
        )
    }
}
