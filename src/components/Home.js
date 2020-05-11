import React, { Component } from 'react';
import styled from 'styled-components';

const HomePage = styled.div`
    background: var(--mainWhite) !important;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .home-info {
        color: var(--mainGreen);
        font-size: 2rem;
        padding: 0 3rem 0 3rem;
    }
    .home-info-two {
        padding: .5rem 0 .5rem 0;
        font-size: 1.3rem;
    }
`

export default class Home extends Component {
    render() {
        return (
        <HomePage >
            <div className="home-info text-center mx-auto d-block mt-5 ">
                <div>
                    A reflection of personal style
                </div>
                <hr />
                <div className="home-info-two py-0">
                    <div>Never take yourself too seriously while learning something new</div>
                </div>
            </div>
            
        </HomePage>
        )
    }
}