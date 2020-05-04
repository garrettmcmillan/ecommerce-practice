import styled from 'styled-components';


export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    letter-spacing: .01rem;
    background: ${props => props.btn ? "var(--mainGreen)" : "var(--paleGreen)"};
    border: ${props => props.btn ? ".05rem solid var(--mainGreen)" : ".05rem solid var(--paleGreen)"};
    color: ${props => props.btn ? "var(--paleGreen)" : "var(--mainGreen)"};
    border-radius: 0.2rem;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
        &:hover{
            background: ${props => props.btn ? "var(--mainGreen)" : "var(--paleGreen)"};
            color: ${props => props.btn ? "var(--paleGreen)" : "var(--mainGreen)"};
            border-color: ${props => props.btn ? "var(--paleGreen) !important" : "var(--mainGreen) !important"};
            transform: scale(1.01);
        }
        &:focus{
            outline: none;
        }
`