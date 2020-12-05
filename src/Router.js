import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import GetData from './components/GetData'
import ShowData from './components/ShowData'

import NotFound from './NotFound'

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/getdata' component={GetData} />
            <Route exact path='/showdata' component={ShowData} />
            <Route component={NotFound}/>
        </Switch>
    )
}