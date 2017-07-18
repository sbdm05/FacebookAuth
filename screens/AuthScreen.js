import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component{
  componentDidMount() {
    this.props.facebookLogin();
  }

  render(){
    return(
      <View/>
      );
  }

}


export default connect(null, actions)(AuthScreen);
