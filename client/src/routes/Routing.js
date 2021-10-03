import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { RecipeView } from '../view/RecipeView'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import { UserContext } from '../shared/global/provider/UserProvider'
import { ProfileView } from '../view/ProfileView'
import { SettingsView } from '../view/SettingsView'
import RoutingPath from './RoutingPath'
import { Profile } from '../components/profile/Profile'

export const Routing = (props) => {

    const [authenticatedUser, setauthenticatedUser] = useContext(UserContext)

    const blockRouteIfAuthenticated = (navigateToView) => {
        return authenticatedUser ? HomeView : navigateToView
    }

    const blockRouteIfNotAuthenticated = (navigateToView) => {
        return !authenticatedUser ? SignInView : navigateToView
    }

    const checkIfUserAuthenticatedInBrowser = () => {
        setauthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        checkIfUserAuthenticatedInBrowser()
    }, [])

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.recipeView} component={RecipeView} />
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView)} />
                <Route exact path={RoutingPath.profileView} component={blockRouteIfNotAuthenticated(ProfileView)} />
                <Route exact path={RoutingPath.settingsView} component={blockRouteIfNotAuthenticated(SettingsView)} />
                <Route component={HomeView} />
            </Switch>   
        </Router>
    )
}