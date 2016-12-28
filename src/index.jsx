import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

import reducer from './reducer';
import {setState} from './action_creators';
import {AppContainer} from './components/App';
import './sass/style.sass';

let middleware = [thunk];
if(process.env.NODE_ENV === 'development') middleware.push(logger());

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
  );

store.dispatch(setState({
  projects: [
    {
      name: 'Camper Leaderboard',
      description: 'Find out who has the most brownie points on FreeCodeCamp over the past 30 days or all time',
      site: 'gordon2012.github.io/leaderboard',
      github: 'github.com/gordon2012/leaderboard',
      thumb: '1.png'
    },

    {
      name: 'Markdown Previewer',
      description: 'Markdown Previewer allows one to enter markdown into a text box and have a live preview display what it looks like styled.<br><br>Technologies used: React, Marked, Webpack, Travis CI',
      site: 'gordon2012.github.io/markdown',
      github: 'github.com/gordon2012/markdown',
      thumb: '2.png'
    },

    {
      name: 'Calculator',
      description: 'A JavaScript powered calculator',
      site: 'gordon2012.github.io/calculator',
      github: 'github.com/gordon2012/calculator',
      thumb: '3.png'
    },

    {
      name: 'Random Quote Machine',
      description: 'A random quote generator',
      site: 'gordon2012.github.io/quote',
      github: 'github.com/gordon2012/quote',
      thumb: '4.png'
    },

    {
      name: 'Wikipedia Search',
      description: 'An implementation of Wikipedia search that uses its search API',
      site: 'gordon2012.github.io/wikiviewer',
      github: 'github.com/gordon2012/wikiviewer',
      thumb: '5.png'
    },

    {
      name: 'Twitch.tv Status',
      description: 'An app that monitors the status of Twitch.tv streamers.<br><br>Technologies used: React, Sass, Webpack',
      site: 'gordon2012.github.io/twitch',
      github: 'github.com/gordon2012/twitch',
      thumb: '6.png'
    }
  ]
}));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
