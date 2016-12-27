import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import gdsphere from '../images/gdsphere4.svg';
import gordon from '../images/gordon.jpg';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <div className="nav">

            <div><img src={gdsphere} alt=""/></div>
            <nav>
              <button>About</button>
              <button>Work</button>
              <button>Contact</button>
            </nav>
          
          </div>
          <h1>Gordon Doskas</h1>
        </header>
        
        
        
          <div className="content">

            <section className="about">
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


            <section className="work">
              <div className="content-inner">
                <h2>My Work</h2>


                <div>
                  <div>A Project</div>
                  <div>A Project</div>
                  <div>A Project</div>
                  <div>A Project</div>
                  <div>A Project</div>
                  <div>A Project</div>
                </div>

              </div>
            </section>

            <section className="contact">
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
  return {
    count: state.count
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);
