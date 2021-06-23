import React, { useState, useCallback, useEffect } from 'react'
import { useParams } from 'react-router'
import api from '../../services/api'

import UserInfo from './UserInfo'
import RepoList from './RepoList'
import StarredList from './StarredList'

import LoadingImg from '../../assets/loading.gif'
import { Container, Loading, Erro } from './styles'

const Details = () => {
    const {username} = useParams()
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [showRepo, setShowRepo] = useState(true)

    useEffect(() => {
        async function fetchData() {
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
        }
        fetchData()
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

            {loading && <Loading><img src={LoadingImg} alt='Carregando'/></Loading>}

            {!loading && error && <Erro><h2>Nenhum usuário encontrado</h2></Erro>}

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