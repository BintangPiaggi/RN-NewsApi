import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1f1b297b8804417596dba4036c321154'}}
        style={{marginTop: 20}}
      />
    );
  }
}