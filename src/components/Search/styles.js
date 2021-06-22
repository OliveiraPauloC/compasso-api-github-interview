import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 60vw;
    padding-top: 5rem;

    input {
        flex: 1;
        border: none;
        background: lightgray;
        padding: 12px 24px;
        border-radius: 8px 0 0 8px;
        
        ::placeholder {
            color: #000;
        }
    }

    button {
        cursor: pointer;
        background: #888;
        padding: 12px 24px;
        border-radius: 0 8px 8px 0;
        color: #fff;

        :hover {
            background: #88888895;
            transition: 0.5s;
            color: #000;
        }
    }
`