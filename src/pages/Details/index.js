import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router'
import api from '../../services/api'

import UserInfo from './UserInfo'
import RepoList from './RepoList'
import StarredList from './StarredList'
import { Container, Erro } from './styles'

const Details = () => {
    const {username} = useParams()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [showRepo, setShowRepo] = useState(true)

    useEffect(async () => {
        try {
          setLoading(true)
    
          const { data } = await api.get(`/users/${username}`)
    
          setUser(data)
        } catch (err) {
          if (err.response.status === 404) {
            setError(true)
            return
          }
        } finally {
          setLoading(false)
        }
    },[])

    const handleRepoClick = useCallback(() => {
        setShowRepo(true)
    }, [])

    const handleStarredClick = useCallback(() => {
        setShowRepo(false)
    }, [])

    return (
        <Container>
            <div>
                <a href={`/`}>
                    <button>Voltar</button>
                </a>
            </div>

            {!loading && error && <Erro><h2>Nenhum Usuário encontrado</h2></Erro>}

            {!loading && !error && JSON.stringify(user) !== {} && (
                <div>
                    <UserInfo
                        user={user}
                        handleRepoClick={handleRepoClick}
                        handleStarredClick={handleStarredClick}
                    />

                    {showRepo && <RepoList username={user.login} />}

                    {!showRepo && <StarredList username={user.login} />}
                </div>
            )}
        </Container>
    )
}

export default Details