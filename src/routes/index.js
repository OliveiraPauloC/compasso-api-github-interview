import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home  from '../pages/Home'
import Details from '../pages/Details'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:username' component={Details} />
        </Switch>
    )
}

export default Routes 