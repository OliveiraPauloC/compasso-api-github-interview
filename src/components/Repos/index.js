import React,{ useState, useEffect } from 'react'
import api from '../../services/api'

function Repos() {
    const [userRepos, setUserRepos] = useState('')

    useEffect(() => {
        api.get(`users/oliveirapauloc/repos`)
            .then(res => {
                setUserRepos(res.data)
            })
    }, [])

    return (
        <div>
            <div>
                <a href={`/oliveirapauloc`}>
                    <button>Voltar</button>
                </a>
            </div>

            {userRepos && 
                <div>
                    {userRepos.map(repo => {
                        return (
                            <div key={repo.id}>
                                <p><b>{repo.name}</b></p>
                                <p>{repo.description}</p>
                                <p>{repo.language}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default Repos