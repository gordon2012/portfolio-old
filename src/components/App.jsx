import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import gdsphere from '../images/gdsphere4.svg';
import gordon from '../images/gordon.jpg';

export default class App extends Component {
  scrollToAnchor(anchor) {
    document.querySelector(`#${anchor}`).scrollIntoView();
  }

  render() {
    const {projects} = this.props;
    return (
      <div className="app">

        <header>
          <nav>
            <div className="brand"><img src={gdsphere} alt=""/></div>
            <div className="button-wrap"><button onClick={e => { this.scrollToAnchor('about'); }}>ABOUT</button></div>
            <div className="button-wrap"><button onClick={e => { this.scrollToAnchor('work'); }}>WORK</button></div>
            <div className="button-wrap"><button onClick={e => { this.scrollToAnchor('contact'); }}>CONTACT</button></div>
          </nav>
          <h1>Gordon Doskas</h1>
        </header>
        
        <div className="content">

          <section className="about" id="about">
            <div className="content-inner">
              <h2>About Me</h2>
              <div className="center"><img src={gordon} className="headshot" alt=""/></div>
              <p className="blurb"><strong>Gordon is a creator</strong> of websites, experiences, and worlds with a focus on development and architecture but with an eye for design.</p>
              <div>
                <h3>My Skills</h3>
                <div>
                  <div>A Skill</div>
                  <div>A Skill</div>
                  <div>A Skill</div>
                  <div>A Skill</div>
                  <div>A Skill</div>
                  <div>A Skill</div>
                </div>
              </div>
            </div>
          </section>

          <section className="work" id="work">
            <div className="content-inner">
              <h2>My Work</h2>
              <div className="work-wrap">
                {projects.map( (e,i) => {
                  const thumb = require(`../images/${e.thumb}`);
                  return (
                    <div className="work-item" key={i}>
                      <div className="work-item-front"  style={{backgroundImage: `url(${thumb})`}}></div>
                      <div className="work-item-back"><span>{e.name}</span></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="contact" id="contact">
            <div className="content-inner">
              <h2>Contact Me</h2>
              <div>
                <div>A Link</div>
                <div>A Link</div>
                <div>A Link</div>
                <div>A Link</div>
                <div>A Link</div>
                <div>A Link</div>
              </div>
            </div>
          </section>

        </div>
        <footer>Copyright 2016 Gordon Doskas</footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);
