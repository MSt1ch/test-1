import React, { Component } from 'react';
import logo from './logo.svg';
import Input from './components/Input';
import Button from './components/Button';
import Popup from './components/Popup';
import TextMirror from './components/TextMirror';
import {updateInputs} from './actions';
import {togglePopup} from './actions';
import {closePopup} from './actions';
import './App.css';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';


const mapStateToProps = (state) => ({
  inputs: state.inputs,
  greeting: state.greeting,
  popup: state.popup
});

const mapDispatchToProps = (dispatch) => ({
  updateInputs: bindActionCreators(updateInputs, dispatch),
  togglePopup: bindActionCreators(togglePopup, dispatch),
  closePopup: bindActionCreators(closePopup, dispatch)
});

class App extends Component {

  handleInputChange = (input) => {
    const {updateInputs} = this.props;
    updateInputs(input)
  };

  handleToglePopup = (show) => {
    const {togglePopup} = this.props;

    togglePopup(show)

  };

  handlClosePopup = (hide) => {
    const {closePopup} = this.props;

    closePopup(hide)

  };

  render() {

    const {inputs, greeting, popup} = this.props;
    console.log(popup);
    const inputsViews = inputs.map( (input) => {
      return (
        <Input  input={input} key={input.id} onChange={this.handleInputChange}/>
      )
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <TextMirror value={greeting}></TextMirror>
        {inputsViews}
        <Button onClick={this.handleToglePopup}/>
      {popup.show ? <Popup onClick={this.handlClosePopup}/> : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
