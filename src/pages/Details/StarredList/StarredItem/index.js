import React from 'react'

import { Container, RepoUser, Language } from './styles'

const StarredItem = ({htmlUrl, ownerUsername, name, description, forksCount, stargazersCount, language}) => {
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

                <Language>
                    {language}
                </Language>
        </Container>
    )
}

export default StarredItem