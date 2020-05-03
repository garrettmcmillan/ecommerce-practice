import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { isElement } from 'react-dom/test-utils';
import styled from 'styled-components';
import { ButtonContainer } from './Button';


const NavWrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-link {
        color: var(--mainGreen) !important;
        font-size: 1.4rem;
        text-transform: capitalize;
        padding-bottom: 0.2rem;
            &:hover{
                border-bottom: 0.03rem solid var(--paleGreen);
            }
            &:focus{
                outline: none;
            }
    }
`
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-3 nav-wrapper">
                {/* 
https://www.iconfinder.com/icons/1046674/arabica_barista_coffea_coffea_arabica_coffee_coffee_plant_plant_icon
Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}
                <span className="link-container col-sm-4"> 
                    <ul className="navbar-nav">
                        <li className="nav-item ml-2">
                            <Link to="/" className="nav-link about">
                                home
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link products">
                                products
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link team">
                                about
                            </Link>
                        </li>
                    </ul>
                </span>
                <span className="logo-container col-sm-4" >
                    <Link className="" to="/" style={{ textDecoration: 'none' }}>
                        <span className="logo-title">
                            <span className="navbar-brand">
                                <img src={logo} className="mx-auto d-block" alt="store" />
                            </span>
                            My Generic Aesthetic.
                        </span>
                    </Link>
                </span>
                <span className="button-container col-sm-4">
                    <Link to="/cart" className="">
                        <ButtonContainer className="cart-button mr-2" >
                            <span className=" mr-2">
                                <i className="fas fa-truck-monster" />
                            </span> 
                            my truckload
                        </ButtonContainer>
                    </Link>
                </span>
            </NavWrapper>
        )
    }
}
