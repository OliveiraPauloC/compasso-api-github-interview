import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import  User  from '../components/User'
import  Repos  from '../components/Repos'
import  Starred  from '../components/Starred'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/oliveirapauloc'>
                <User />
            </Route>

            <Route exact path='/oliveirapauloc/repos'>
                <Repos />
            </Route>

            <Route exact path='/oliveirapauloc/starred'>
                <Starred />
            </Route>
           
            <Route>
                <h1>Página não encontrada</h1>
            </Route>
        </Switch>
    )
}

export default Router