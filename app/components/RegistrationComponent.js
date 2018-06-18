import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import RegistrationContent from './RegistrationContent';


class _RegistrationComponent extends Component {
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
            <RegistrationContent/>          
        </div>
        );
    }
}

const RegistrationComponent = Container.create(_RegistrationComponent);
export default RegistrationComponent;