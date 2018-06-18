import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import LogContent from './LogContent';


class _LoginComponent extends Component {
    static getStores() {
        return [SampleStore];
        
    }
    static calculateState() {
        return {
            sample: SampleStore.getState()
        };
    }
    render() {
        return (
        <div>
            <LogContent/>          
        </div>
        );
    }
}

const LoginComponent = Container.create(_LoginComponent);
export default LoginComponent;