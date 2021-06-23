import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    padding-top: 16px;
    position: relative;

    :hover {
        background: #eee;
        transition: 0.5s;
    }

    &:before {
        content: '';
        width: 100%;
        border-bottom: 1px solid #eee;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }

    & + & {
        margin-top: 16px;
    }
    
    @media (min-width: 738px) {
        flex-direction: row;
    }

    @media (max-width: 738px) {
        margin: 0 30px;
    }
`

export const RepoUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-weight: 300;
    margin-bottom: 15px;

    span {
        font-weight: 500;
    }

    div {
        margin-top: 5px;
    }
`

export const Language = styled.div`
    color: #111;
    text-transform: uppercase;
`