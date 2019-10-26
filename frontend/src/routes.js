import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MostraUsuarios from './pages/MostraUsuarios'


export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/mostraUsuarios" component={MostraUsuarios} />
            </Switch>
        </BrowserRouter>
    )
}
