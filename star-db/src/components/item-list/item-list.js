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

    renderItem (arr){
        return arr.map(({id, name}) =>{
            return(
                <li className="list-group-item"
                    key={id}
                    onClick={()=> this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {

        const {ItemList} = this.state;
        if (!ItemList){
            return <Spinner/>;
        }

        const items = this.renderItem(ItemList);
        return(
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}

