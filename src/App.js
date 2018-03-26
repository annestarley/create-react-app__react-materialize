import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Container, Row, Col, Input } from 'react-materialize';
import Navbar from './components/Navbar'

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}

export default App;
