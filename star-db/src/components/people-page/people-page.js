import React, {Component} from 'react';

import './people-page.css'
import PersonDetails from "../person-details";
import ItemList from "../item-list";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component{

    swapiService = new SwapiService();


    state = {
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    }

    onPersonSelected =(id)=>{
        this.setState({
            selectedPerson: id,
        })
    };
    render() {
        console.log(this.swapiService.getAllPeople());
        console.log(this.swapiService.getAllPeople);
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return(
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected = {this.onPersonSelected}

                              getData={this.swapiService.getAllPeople()} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId = {this.state.selectedPerson} />
                </div>
            </div>
        )

    }
}