import React, { useEffect, useState } from "react"
import api from '../../../services/api'

import RepoItem from './RepoItem'
import { Container } from "./styles"

const RepoList = ({username}) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(async () => {
        try {
          setLoading(true);
    
          const { data } = await api.get(`/users/${username}/repos`);
    
          setRepos(data);
        } catch (err) {
          if (err.response.status == 404) {
            setError(true);
            return;
          }
        } finally {
          setLoading(false);
        }
      }, []);

      return (
          <Container>
            {!loading && error && 'Nenhum Usuário encontrado!'}

            {!loading && repos.map((repo) => (
                <RepoItem 
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

export default RepoList