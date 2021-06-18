import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import api from '../../services/api'

import Starred from '../../components/Starred'
import Repos from '../../components/Repos'

const User = () => {
    const [user, setUser] = useState('')

    useEffect(() => {
        api.get(`/users/oliveirapauloc`)
            .then((res) => {
                setUser(res.data)
            })
    }, [])

    return (
        <div>
    <img 
        src={user.avatar_url}
        alt={user.name}
    />
        <h3>{user.name}</h3>
        <h2>{user.login}</h2>
        <Link to={`/oliveirapauloc/repos`}>
            <button>Repos</button>
        </Link>
        <Link to={`/oliveirapauloc/starred`}>
            <button>Starred</button>
        </Link>
        <Link to={`/`}>
            <button>Voltar</button>
        </Link>
    </div>
    )
}
export default User