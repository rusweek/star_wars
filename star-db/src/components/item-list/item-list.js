import React, {Component} from 'react';

import './item-list.css'

import Spinner from "../spinner";

export default class ItemList extends Component
{

    state = {
        ItemList: null,
    };

    componentDidMount() {

        const { getData } = this.props;
        getData
            .then((ItemList)=>{
                this.setState({
                    ItemList: ItemList
                })
            })
    }

    renderItems(arr){
        return arr.map((item) =>{
            const {id} = item;
            const label = this.props.renderItem(item);
            return(
                <li className="list-group-item"
                    key={id}
                    onClick={()=> this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const {ItemList} = this.state;
        if (!ItemList){
            return <Spinner/>;
        }

        const items = this.renderItems(ItemList);
        return(
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}

