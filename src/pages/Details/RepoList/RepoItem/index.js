import React from 'react'

import { Container, RepoUser } from './styles'

const RepoItem = ({htmlUrl, ownerUsername, name, description, forksCount, stargazersCount, language}) => {
    return (
        <Container>
                <RepoUser>
                    <div>
                        <a href={htmlUrl} >{ownerUsername}/<span>{name}</span></a>
                    </div>
                    <div>
                        {description}
                    </div>
                </RepoUser>

                <div>
                    {language}
                </div>
        </Container>
    )
}

export default RepoItem