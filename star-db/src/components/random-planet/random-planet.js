import React, { Component } from 'react';

import Spinner from '../spinner';

import './random-planet.css';
import ErrorIndicator from "../error-indicator";
import ImageComponent from "../image-component";

import PropTypes from 'prop-types';

export default class RandomPlanet extends Component {


    state = {
        planet: {},
        loading: true
    };


    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };


    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 3;
        const {swapiService} = this.props;
        swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };


    render() {
        const { planet, loading, error } = this.state;
        const errorMessage = error ? <ErrorIndicator /> : null;
        const  hasData = !(loading || errorMessage);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}
RandomPlanet.defaultProps = {
    updateInterval: 10000
};

RandomPlanet.propType = {
    updateInterval: PropTypes.number
};
const PlanetView = ({ planet }) => {

    const { id, name, population,
        rotationPeriod, diameter } = planet;


    return (
        <React.Fragment>
            {/*<img className="planet-image"*/}
            {/*     alt="img"*/}
            {/*     */}
            {/*     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />*/}
            <ImageComponent classNmae="random-planet" imageUrl={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div className="ml-3">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};



