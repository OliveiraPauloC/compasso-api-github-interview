import React from 'react'
import { Container } from './styles'

const UserInfo = ({user, handleRepoClick, handleStarredClick}) => {
    return (
        <Container>
            <h2>{user.name}</h2>
            <img src={user.avatar_url} alt='Avatar' />
            <h3>@{user.login}</h3>

            <div>
                <button onClick={handleRepoClick}>Repositórios</button>
                <button onClick={handleStarredClick}>Favoritos</button>
            </div>
        </Container>
    )
}

export default UserInfo