import React, {Component} from 'react'
import Spinner from '../spinner';
import './item-details.css'
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        times: false,
        image: null
    };

    componentDidMount() {

        this.updateItem();

    }

    componentDidUpdate(prevProps) {

        if (this.props.itemId !== prevProps.itemId){
            this.setState({
                times: true
            });
            this.setState({
                loading: true
            });
            this.updateItem();
        }
    }

    updateItem(){
        const { itemId, getData, getImagUrl } = this.props;
        console.log(getImagUrl);
        console.log(itemId);
        console.log(getImagUrl(itemId));
        if (!itemId){
            return;
        }

        getData(itemId)
            .then((item) => {

                this.setState({
                    item: item,
                    loading: false,
                    image: getImagUrl(itemId)

                });

            })
    }



    render() {

        if(!this.state.item && !this.state.times){
            return <span>Select a person from the list</span>
        }

        const { item, loading, image} = this.state;

        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <PersonView item={item} image={image}/> : null;

        return (
            <div className="person-details card">
                {spinner}
                {content}
            </div>
        );


    }
}

const PersonView =({item, image}) =>{

    const { id, name, gender, birthYear, eyeColor} = item;

    return(
        <React.Fragment>
            <img className="person-image" src={image} alt=""/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};