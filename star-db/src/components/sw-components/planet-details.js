import React from 'react';

import ItemDetails, { Record } from "../item-details";
import {withSwapiService} from "../hoc-halper";

const PlanetDetails = (props) => {
    return (
            <ItemDetails {...props} >
                <Record field="population" label="Population: "/>
                <Record field="rotationPeriod" label="Rotation period: "/>
                <Record field="diameter" label="Diameter: "/>
            </ItemDetails>
    );

};

const mapMethodsToProps = (swapiService)=>{

    return {
        getData: swapiService.getPlanet,
        getImagUrl: swapiService.getPlanetImage,
    }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);