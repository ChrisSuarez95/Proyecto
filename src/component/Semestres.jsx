import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
// import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Header from './Header';
import semestresView from '../view/Semestres';
import Footer from './Footer';

class Semestres extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Header name="SEMESTRES" />
        <semestresView />
        <Footer />
      </div>
    );
  }
}

export default Semestres;
