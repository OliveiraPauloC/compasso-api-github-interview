import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 20px 0;
        color: #555;
    }

    img {
        width: 200px;
        border-radius: 50%;
        border: 4px solid grey;
    }

    h3 {
        flex: 1;
        margin: 8px 0;
        color: grey;
    }

    div {
        display: flex;

        button {
            display: flex;
            align-items: center;
            padding: 8px 16px;
            border-radius: 6px;
            margin: 12px;
            font-size: 16px;
            cursor: pointer;
            border: 1px solid black;

            :hover {
                background: #eee;
                transition: 0.5s;
            }
        }
    }
`