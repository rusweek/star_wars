// import React, {Component} from 'react';
// import Row from "../row";
// import {StarshipDetails, StarshipList} from "../sw-components";
//
// export default class StarshipPage extends Component{
//
//     state = {
//         selectedItem: null
//     };
//
//     onItemSelected = (selectedItem) => {
//         this.setState({selectedItem});
//     };
//
//     render() {
//         const {selectedItem} = this.state;
//         return(
//             <Row
//                 left={<StarshipList onItemSelected={this.onItemSelected}/>}
//                 right={<StarshipDetails itemId={selectedItem} />}
//             />
//         );
//
//     }
// }
//
//


import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ history }) => {
    return (
        <StarshipList
            onItemSelected={(id) => history.push(id)} />
    );
};

export default withRouter(StarshipsPage);

