import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './app.css'

import Header from "../header";
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider, SwapiServiceConsumer} from "../swapi-service-context";
import PlanetPage from "../pages/planets-page";
import PeoplePage from "../pages/people-page";
import StarshipPage from "../pages/starships-page";
import StarshipDetails from "../sw-components/starship-details";

import {SecretPage, LoginPage} from '../pages'



export default class App extends React.Component {
    swapiService = new SwapiService();
    state = {
        hasError: false,
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };


    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
        })
    }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        const { isLoggedIn } = this.state;


        return(
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="container">
                            <Header />
                            <SwapiServiceConsumer>
                                {()=>{
                                    return (<RandomPlanet swapiService={this.swapiService}/>)
                                }}
                            </SwapiServiceConsumer>

                            <Route path="/" render={()=><h2>Welcome to Star Wars information blog</h2>} exact/>

                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetPage}/>
                            <Route path="/starships" component={StarshipPage} exact/>
                            <Route path="/starships/:id" render={({match})=>{
                                const {id} = match.params;
                                return <StarshipDetails itemId={id} url={match.url} />
                            }}/>

                            <Route
                                path="/login"
                                render={() => (
                                    <LoginPage
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin}/>
                                )}/>

                            <Route
                                path="/secret"
                                render={() => (
                                    <SecretPage isLoggedIn={isLoggedIn} />
                                )}/>

                            <Route render={() => <h2>Page not found</h2>} />

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }



};

