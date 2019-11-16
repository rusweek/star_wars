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
                getImagUrl={this.swapiService.getPersonImage}>
                    <Record field="gender" label="Gender: " />
                    <Record field="eyeColor" label="Eye color: " />
                    <Record field="birthYear" label="Birth year: " />

            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5}
                getData={this.swapiService.getStarship}
                getImagUrl={this.swapiService.getStarshipImage} >
                    <Record field="model" label="Model: "/>
                    <Record field="length" label="Length: "/>
                    <Record field="manufacturer" label="Manufacturer: "/>
            </ItemDetails>
        );
        return(
            <ErrorBoundry>
                <div className="container">
                    <Header />
                    <RandomPlanet />
                    <ItemList
                        onItemSelected = {()=>{}}
                        getData={this.swapiService.getAllPeople()}
                        >
                        {({name})=> `${name}`}
                    </ItemList>
                    <ItemList
                        onItemSelected = {()=>{}}
                        getData={this.swapiService.getAllPlanets()}
                        >
                        {({name})=> `${name}`}
                    </ItemList>
                    {/*<PeoplePage />*/}
                    {/*<Row*/}
                    {/*    left={personDetails}*/}
                    {/*    right={starshipDetails}*/}
                    {/*/>*/}
                </div>
            </ErrorBoundry>
        );
    }



};

