import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import gdsphere from '../images/gdsphere4.svg';
import gordon from '../images/gordon.jpg';

import Modal from './Modal';

export default class App extends Component {
  scrollToAnchor(anchor) {
    document.querySelector(`#${anchor}`).scrollIntoView();
  }

  render() {
    const {projects, social, skills} = this.props;

    return (
      <div className="app">

        <Modal />

        <header>
          <div className="nav">
            <div className="brand"><img src={gdsphere} alt=""/></div>
            <nav>
              <div onClick={e => { this.scrollToAnchor('about'); }}>ABOUT</div>
              <div onClick={e => { this.scrollToAnchor('work'); }}>WORK</div>
              <div onClick={e => { this.scrollToAnchor('contact'); }}>CONTACT</div>
            </nav>
          </div>
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
                <div className="skills-wrap">

                  {skills.map( (e,i) => {
                    return (
                      <div key={i} className="skill-item-wrap">
                        <div className="skill-item">{e}</div>
                      </div>
                    );
                  })}

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
                      <div className="work-item-front" style={{backgroundImage: `url(${thumb})`}}></div>
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
              <div className="contact-wrap">

                {social.map( (e,i) =>
                  <div key={i} className="contact-item-wrap">
                    <div className="contact-item-border" style={{width: e.outerSize, height: e.outerSize, backgroundColor: e.bgcolor }} onClick={f => { window.open(e.url, '_blank'); }}>
                      <div className="contact-item-inner" style={{width: e.innerSize, height: e.innerSize }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          {e.path.map( (f,k) => <path key={k} fill={e.color} d={f}></path> )}
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
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
