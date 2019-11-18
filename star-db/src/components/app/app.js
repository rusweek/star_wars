import React from 'react';

import './app.css'

import Header from "../header";
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details/item-details';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
    } from '../sw-components'


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
                <div className="container">
                    <Header />
                    <RandomPlanet />

                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />
                    
                    <PersonList />
                    <StarshipList />
                    <PlanetList />

                    {/*<Row*/}
                    {/*    left={personDetails}*/}
                    {/*    right={starshipDetails}*/}
                    {/*/>*/}
                </div>
            </ErrorBoundry>
        );
    }



};

