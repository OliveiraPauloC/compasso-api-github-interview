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
`

export const RepoUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-weight: 300;

    span {
        font-weight: 500;
    }
`