import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Button from 'material-ui/Button';
import SampleActionCreator from '../actions/SampleActionCreators';
import TextField from 'material-ui/TextField'
import Navi from './Navi';
import Menu from './Menu';
import axios from 'axios'
import { Container } from 'flux/utils'
import SampleStore from '../stores/SampleStore'

class _MyInfoComponent extends Component {
    static getStores() {
        return [SampleStore];
      }
      static calculateState() {
        return {
          sample: SampleStore.getState()
        };
      }

      constructor(props) {
          super(props)
            this.state = {
                
            }
      }
    render() {
        return (
            <div>
            <Navi title="Orders"/>
            <div style={{display:"flex"}}>
            <Menu/>
            </div>
            </div>
        )
    }
}

const MyInfoComponent = Container.create(_MyInfoComponent);
export default MyInfoComponent