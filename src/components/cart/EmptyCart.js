import React from 'react'
import styled from 'styled-components';

const EmptyCartContainer = styled.div`
    background: var(--mainWhite) !important;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;

`    
export default function EmptyCart() {
    return (
        <EmptyCartContainer >
            <div className="container mb-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-green text-capitalize">
                        <h1>your truck is clean</h1>
                    </div>
                </div>
            </div>
        </EmptyCartContainer>
    )
}
