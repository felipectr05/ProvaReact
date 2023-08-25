import styled from "styled-components"

export const Main = styled.main`
    display: grid;
    grid-template-columns: auto auto;
    padding: 15px;
    justify-content: space-around;
    gap: 30px;

    @media (max-width: 640px) {
        grid-template-columns: auto;
    }
`


