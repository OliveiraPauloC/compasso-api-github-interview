import React,{ useState, useEffect } from 'react'
import api from '../../services/api'

function Starred() {
    const [userStarred, setUserStarred] = useState('')

    useEffect(() => {
        api.get(`users/oliveirapauloc/starred`)
            .then((res) => {
                setUserStarred(res.data)
            })
    },[])

    return (
        <div>
            <div>
                <a href={`/oliveirapauloc`}>
                    <button>Voltar</button>
                </a>
            </div>

            {userStarred && 
                <div>
                    {userStarred.map(repo => {
                        return (
                            <div key={repo.id}>
                                <p><b>{repo.name}</b></p>
                                <h3>{repo.owner.login}</h3>
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

export default Starred