import React, { Component } from 'react';
import styled from 'styled-components';

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
        font-size: 1.9rem !important;
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
                <h2>
                    A reflection of personal style
                </h2>
                <hr />
                <div className="home-info-two py-0">
                    <h5>Never take yourself too seriously while learning something new</h5>
                </div>
            </div>
            
        </HomePage>
        )
    }
}