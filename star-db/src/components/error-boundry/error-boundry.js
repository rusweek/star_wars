import React, {Component} from 'react'
import ErrorIndicator from "../error-indicator";

import './error-boundry.css'

export default class ErrorBoundry extends Component{

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    }
    render() {

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return this.props.children;
    }
}