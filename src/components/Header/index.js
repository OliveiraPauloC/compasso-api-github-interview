import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

const Header = () => {
    return (
        <Container>
                <Link to='.'>
                    <h2>GitHub Busca</h2>
                </Link>
        </Container>
    )
}

export default Header