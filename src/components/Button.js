import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: var(--mainGreen);
    border: 0.05rem solid var(--mainGreen);
    color: var(--paleGreen);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
        &:hover{
            background: var(--paleGreen);
            color: var(--mainGreen);
            border-color: var(--paleGreen);
        }
        &:focus{
            outline: none;
        }
`