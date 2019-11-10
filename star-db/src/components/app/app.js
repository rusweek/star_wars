import React from 'react';

import './app.css'

import Header from "../header";
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";


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

        const personDetails = (
            <ItemDetails itemId={11}
            getData={this.swapiService.getPerson}
                         getImagUrl={this.swapiService.getPersonImage}/>
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
            getData={this.swapiService.getStarship}
                         getImagUrl={this.swapiService.getStarshipImage}/>
        );
        return(
            <ErrorBoundry>
                <div className="container">
                    <Header />
                    <RandomPlanet />
                    {/*<PeoplePage />*/}
                    <Row
                        left={personDetails}
                        right={starshipDetails}
                    />
                </div>
            </ErrorBoundry>
        );
    }



};

