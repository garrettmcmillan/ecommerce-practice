import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    letter-spacing: .01rem;
    background: var(--paleGreen);
    border: .05rem solid var(--paleGreen);
    color: var(--mainGreen);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
        &:hover{
            background: var(--paleGreen);
            color: var(--mainGreen);
            border-color: var(--mainGreen) !important;
            transform: scale(1.01);
        }
        &:focus{
            outline: none;
        }
`