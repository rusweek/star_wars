// import React, {Component} from 'react';
// import {PersonDetails, PersonList} from "../sw-components";
// import Row from "../row";
//
// export default class PeoplePage extends Component{
//     state = {
//         selectedItem: null
//     };
//
//     onItemSelected = (selectedItem) => {
//         this.setState({selectedItem});
//     };
//
//     render() {
//
//         const {selectedItem} = this.state;
//
//         return(
//             <Row
//                 left={<PersonList  onItemSelected={this.onItemSelected}/>}
//                 right={<PersonDetails itemId={selectedItem} />}
//             />
//         );
//     }
// }

import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;

    return (
        <Row
            left={<PersonList onItemSelected={(id) => history.push(id)} />}
            right={<PersonDetails itemId={id} url={match.url} />} />
    );
};

export default withRouter(PeoplePage);
