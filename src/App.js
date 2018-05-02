import React from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch'; 
import LeftColumn from './LeftColumn';
import Card from './Card';
import keys from './config/keys';
import './App.css';

export default () => (
  <div className="container">
    <ReactiveBase
      app="housing-dev"
      credentials={keys.credentials}
      type="listing"
      theme={{
        primaryColor: '#FF3A4E',
      }}
    >
      <nav className="nav">
        <div className="title">airbeds</div>
      </nav>    
      <LeftColumn />
      <Card />

    </ReactiveBase>
  </div>
);

