import React, { Component } from 'react';
import BreadcrumbView from './views/breadcrumb-view';

const BreadcrumbData = [
  {
    id: 'home',
    label: 'Home'
  }, {
    id: 'kitchen',
    label: 'Kitchen'
  }, {
    id: 'appliances',
    label: 'Appliances'
  }, {
    id: 'wM',
    label: 'Washing Machine'
  }, {
    id: 'Whirlpool',
    label: 'Washing Machine'
  }
];


class App extends Component {
  render() {
    return (
        <BreadcrumbView items={BreadcrumbData}/>
    );
  }
}

export default App;
