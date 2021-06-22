import styled from "styled-components"

export const Container = styled.div`

    button {
        padding: 8px 16px;
        border-radius: 6px;
        margin: 30px 30px;
        border: 1px solid black;
        font-size: 16px;
        cursor: pointer;

        :hover {
            background: #eee;
            transition: 0.5s;
        }
    }
`

export const Erro = styled.div`
    text-align: center;
    padding: 50px 0;
`