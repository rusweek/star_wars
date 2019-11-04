import React from 'react';

import './app.css'

import Header from "../header";
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";


export default class App extends React.Component {

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
            <div className="container">
                <Header />
                <RandomPlanet />



                   <PeoplePage />

            </div>
        );
    }



};

