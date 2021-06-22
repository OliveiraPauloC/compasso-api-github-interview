import React, { useState } from 'react'
import { Container } from './styles'

const Search = () => {
    const [search, setSearch] = useState('')

    return (
        <Container>
                <input
                    placeholder='Buscar Usuário'
                    onChange={event => setSearch(event.target.value)}
                />
                <a href={search.length === '' ? undefined : `/${search}`}>
                    <button disabled={search.length === ''}>Buscar</button>
                </a>
        </Container>
    )
}

export default Search