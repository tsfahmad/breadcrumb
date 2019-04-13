import React from 'react';
import ReactDOM from 'react-dom'
import BreadcrumbView from './../../src';

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

const onBreadcrumbItemCLick = (id) => console.log(id);

ReactDOM.render(<BreadcrumbView items={BreadcrumbData} onClick={onBreadcrumbItemCLick}/>, document.getElementById('root'));
