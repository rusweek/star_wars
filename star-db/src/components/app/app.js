import React from 'react';

import './app.css'

import Header from "../header";
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import {SwapiServiceProvider, SwapiServiceConsumer} from "../swapi-service-context";
import PlanetPage from "../pages/planets-page";
import PeoplePage from "../pages/people-page";
import Starship from "../pages/starships-page";


export default class App extends React.Component {
    swapiService = new SwapiService();
    state = {
        hasError: false
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

        return(
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="container">
                        <Header />
                        <SwapiServiceConsumer>
                            {()=>{
                                return (<RandomPlanet swapiService={this.swapiService}/>)
                            }}
                        </SwapiServiceConsumer>

                        <PeoplePage />
                        <PlanetPage />
                        <Starship />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }



};

