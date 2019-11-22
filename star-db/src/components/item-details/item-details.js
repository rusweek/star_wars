import React, {Component} from 'react';
import Spinner from '../spinner';
import './item-details.css';

const Record =({item, field, label})=>{

    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {


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

            });
    }



    render() {
        if(!this.state.item && !this.state.times){
            return <span>Select a person from the list</span>
        }


        const { item, image, loading} = this.state;
        const { url} = this.props;



        const spinner = loading ? <Spinner /> : null;
        if(loading){
            return <div className="person-details card"> {spinner}</div>
        }
        const { name } = item;
        return (
            <div className="person-details card">
                <img className="person-image" src={image} alt=""/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush ">
                        {
                            React.Children.map(this.props.children, (child) =>{
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>

            </div>
        );


    }
}
