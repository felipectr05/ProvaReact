import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Sidebar = styled.menu`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: start;
    width: 8rem;
    height: 100vh;
    margin: 4px solid ${colors.Thirst};
    
`

export const ButtonBlue = styled.button`
    background-color: ${colors.White};
    button{
        a{
            text-decoration: none;
            color: ${colors.White};
        }
        background-color: ${colors.First};
        height: 3rem;
        width: 6rem;
        color: ${colors.White};
        border-radius: 0.5rem;
    }
`


export const ButtonGreen = styled.button`
    background-color: ${colors.White};
    button{
        a{
            text-decoration: none;
            color: ${colors.White};
        }
        background-color: ${colors.Second};
        height: 3rem;
        width: 6rem;
        color: ${colors.White};
        border-radius: 0.5rem;
    }
`