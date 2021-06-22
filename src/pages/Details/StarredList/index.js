import React, { useEffect, useState } from 'react'
import api from '../../../services/api'

import { Container } from './styles'

import StarredItem from './StarredItem'

const StarredList = ({username}) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(async () => {
        try {
          setLoading(true)
    
          const { data } = await api.get(`/users/${username}/starred`)
    
          setRepos(data)
        } catch (err) {
          if (err.response.status == 404) {
            setError(true)
            return
          }
        } finally {
          setLoading(false)
        }
      }, [])

      return (
          <Container>
            {!loading && error && 'Nenhum Usuário encontrado!'}

            {!loading && repos.map((repo) => (
                <StarredItem 
                  key={repo.id}
                  htmlUrl={repo.html_url}
                  ownerUsername={repo.owner.login}
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                />
            ))}
          </Container>
      )
}

export default StarredList