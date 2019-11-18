import React from 'react';

import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage} = swapiService;

const PersonDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getPerson}
                     getImagUrl={getPersonImage}>
            <Record field="gender" label="Gender: " />
            <Record field="eyeColor" label="Eye color: " />
            <Record field="birthYear" label="Birth year: " />

        </ItemDetails>
    );
};
const PlanetDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getPlanet}
                     getImagUrl={getPlanetImage} >
            <Record field="population" label="Population: "/>
            <Record field="rotationPeriod" label="Rotation period: "/>
            <Record field="diameter" label="Diameter: "/>
        </ItemDetails>
    );
};
const StarshipDetails = ({itemId}) => {
    return(
        <ItemDetails itemId={itemId}
                     getData={getStarship}
                     getImagUrl={getStarshipImage} >
            <Record field="model" label="Model: "/>
            <Record field="length" label="Length: "/>
            <Record field="manufacturer" label="Manufacturer: "/>
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};