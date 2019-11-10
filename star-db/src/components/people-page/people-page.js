import React, {Component} from 'react';

import './people-page.css'
import ItemDetails from "../item-details";
import ItemList from "../item-list";
//import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component{

    swapiService = new SwapiService();


    state = {
        selectedPerson: null,

    };



    onPersonSelected =(id)=>{
        this.setState({
            selectedPerson: id,
        })
    };
    render() {



        const itemList = (
            <ItemList
            onItemSelected = {this.onPersonSelected}
            getData={this.swapiService.getAllPeople()}
            renderItem={({name, gender, birthYear})=> `${name}  (${gender}, ${birthYear})`}>

            </ItemList>

        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId = {this.state.selectedPerson}/>
            </ErrorBoundry>
        );

        return(

                <Row left={itemList} right={personDetails} />

        );

    }
}