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
import MyInfoContent from './MyInfoContent'

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
          SampleActionCreator.action005(this.props.match.params.id)
            this.state = {
            }
      }
      createMyInfo = (inf) => {
        return <MyInfoContent obj={inf} id={this.props.match.params.id} />
    }

    myInfo = (inf) => inf.map(this.createMyInfo);

    render() {
        return (
            <div>
            <Navi title="Orders"/>
            <div style={{display:"flex"}}>
            <Menu id={this.props.match.params.id}/>
            </div>
                <div>
                    {this.myInfo(this.state.sample.myInfo)}
                </div>
            </div>
        )
    }
}

const MyInfoComponent = Container.create(_MyInfoComponent);
export default MyInfoComponent