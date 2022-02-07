import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import NormalRoute from './routes/NormalRoute'
import HomePage from './pages/HomePage/HomePage'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import Auth from './pages/Auth'
function Routes() {
    return (
        <Router>
            <Switch>
                <NormalRoute
                 path='/'
                 exact
                 layout={PublicLayout}
                 component={HomePage}/>

                <NormalRoute
                path='/movie/:name'
                exact
                layout={PublicLayout}
                component={MovieDetail}/>
                <Route
                path={['/login','/register']}
                exact
                component={Auth}
                />

                <NormalRoute
                path={['/movies/:type','/movies/:type/:page']}
                exact
                layout={PublicLayout}
                component={MovieDetail}/>
                <Route
                path={['/login','/register']}
                exact
                component={Auth}
                />
            </Switch>
        </Router>
    )
}

export default Routes
/*

*/