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
      description: ['Find out who has the most brownie points on FreeCodeCamp over the past 30 days or all time'],
      site: 'http://leaderboard.gordondoskas.com',
      github: 'https://github.com/gordon2012/leaderboard',
      thumb: '1.png'
    },

    {
      name: 'Markdown Previewer',
      description: ['Markdown Previewer allows one to enter markdown into a text box and have a live preview display what it looks like styled.', 'Technologies used: React, Marked, Webpack, Travis CI'],
      site: 'http://markdown.gordondoskas.com',
      github: 'https://github.com/gordon2012/markdown',
      thumb: '2.png'
    },

    {
      name: 'Calculator',
      description: ['A JavaScript powered calculator'],
      site: 'http://calculator.gordondoskas.com',
      github: 'https://github.com/gordon2012/calculator',
      thumb: '3.png'
    },

    {
      name: 'Random Quote Machine',
      description: ['A random quote generator'],
      site: 'http://quote.gordondoskas.com',
      github: 'https://github.com/gordon2012/quote',
      thumb: '4.png'
    },

    {
      name: 'Wikipedia Search',
      description: ['An implementation of Wikipedia search that uses its search API'],
      site: 'http://wikiviewer.gordondoskas.com',
      github: 'https://github.com/gordon2012/wikiviewer',
      thumb: '5.png'
    },

    {
      name: 'Twitch.tv Status',
      description: ['An app that monitors the status of Twitch.tv streamers.', 'Technologies used: React, Sass, Webpack'],
      site: 'http://twitch.gordondoskas.com',
      github: 'https://github.com/gordon2012/twitch',
      thumb: '6.png'
    }
  ],

  social: [
    {
      url: 'https://github.com/gordon2012',
      outerSize: '128px',
      innerSize: '104px',
      bgcolor: '#1A237E',
      color: 'white',
      path: ['M16 0c-8.836 0-16 7.164-16 16 0 7.070 4.584 13.066 10.942 15.182 0.8 0.146 1.092-0.348 1.092-0.77 0-0.381-0.015-1.643-0.022-2.979-4.449 0.967-5.39-1.887-5.39-1.887-0.729-1.848-1.776-2.34-1.776-2.34-1.454-0.992 0.11-0.973 0.11-0.973 1.606 0.111 2.452 1.648 2.452 1.648 1.428 2.445 3.746 1.738 4.656 1.328 0.145-1.031 0.559-1.738 1.016-2.137-3.552-0.404-7.288-1.777-7.288-7.908 0-1.748 0.624-3.174 1.646-4.294-0.163-0.406-0.714-2.034 0.158-4.236 0 0 1.342-0.43 4.4 1.641 1.275-0.356 2.644-0.532 4.004-0.538 1.359 0.006 2.729 0.184 4.006 0.54 3.053-2.072 4.396-1.641 4.396-1.641 0.875 2.204 0.324 3.83 0.16 4.234 1.025 1.12 1.645 2.546 1.645 4.294 0 6.146-3.742 7.5-7.307 7.896 0.576 0.496 1.086 1.469 1.086 2.961 0 2.139-0.021 3.863-0.021 4.391 0 0.426 0.291 0.924 1.102 0.768 6.354-2.119 10.934-8.115 10.934-15.182 0-8.836-7.164-16-16-16z'
    ]},

    {
      url: 'https://www.linkedin.com/in/gordon-doskas',
      outerSize: '128px',
      innerSize: '72px',
      bgcolor: '#1A237E',
      color: 'white',
      path: [
      'M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z',
      'M2 12h6v18h-6v-18z',
      'M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z',
    ]},

    {
      url: 'https://twitter.com/gordondoskas',
      outerSize: '128px',
      innerSize: '72px',
      bgcolor: '#1A237E',
      color: 'white',
      path: [
      'M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z',
    ]},

    {
      url: 'http://codepen.io/gordon2012/',
      outerSize: '128px',
      innerSize: '72px',
      bgcolor: '#1A237E',
      color: 'white',
      path: [
      'M29.555 11.501l-14-9.333c-0.336-0.224-0.774-0.224-1.109 0l-14 9.333c-0.278 0.185-0.445 0.498-0.445 0.832v9.333c0 0.334 0.167 0.647 0.445 0.832l14 9.333c0.168 0.112 0.361 0.168 0.555 0.168s0.387-0.056 0.555-0.168l14-9.333c0.278-0.185 0.445-0.498 0.445-0.832v-9.333c0-0.334-0.167-0.647-0.445-0.832zM15 20.465l-5.197-3.465 5.197-3.465 5.197 3.465-5.197 3.465zM16 11.798v-6.93l11.197 7.465-5.197 3.465-6-4zM14 11.798l-6 4-5.197-3.465 11.197-7.465v6.93zM6.197 17l-4.197 2.798v-5.596l4.197 2.798zM8 18.202l6 4v6.93l-11.197-7.465 5.197-3.465zM16 22.202l6-4 5.197 3.465-11.197 7.465v-6.93zM23.803 17l4.197-2.798v5.596l-4.197-2.798z',
    ]},

    {
      url: 'https://dribbble.com/gordondoskas',
      outerSize: '128px',
      innerSize: '72px',
      bgcolor: '#1A237E',
      color: 'white',
      path: [
      'M16 32c-8.825 0-16-7.175-16-16s7.175-16 16-16c8.825 0 16 7.175 16 16s-7.175 16-16 16v0zM29.494 18.188c-0.469-0.15-4.231-1.269-8.512-0.581 1.788 4.912 2.512 8.912 2.656 9.744 3.063-2.075 5.25-5.356 5.856-9.163v0zM21.337 28.6c-0.206-1.2-0.994-5.375-2.913-10.363-0.031 0.012-0.063 0.019-0.087 0.031-7.713 2.688-10.481 8.031-10.725 8.531 2.319 1.806 5.231 2.887 8.387 2.887 1.894 0 3.7-0.387 5.338-1.087v0zM5.844 25.156c0.313-0.531 4.063-6.738 11.106-9.019 0.175-0.056 0.356-0.113 0.538-0.162-0.344-0.775-0.719-1.556-1.106-2.319-6.819 2.044-13.444 1.956-14.044 1.95-0.006 0.137-0.006 0.275-0.006 0.419 0 3.506 1.331 6.712 3.512 9.131v0zM2.625 13.219c0.612 0.006 6.244 0.031 12.637-1.662-2.262-4.025-4.706-7.412-5.069-7.906-3.825 1.806-6.688 5.331-7.569 9.569v0zM12.8 2.731c0.375 0.506 2.863 3.888 5.1 8 4.863-1.819 6.919-4.588 7.163-4.938-2.413-2.144-5.587-3.444-9.063-3.444-1.1 0.006-2.175 0.138-3.2 0.381v0zM26.581 7.381c-0.288 0.388-2.581 3.325-7.631 5.388 0.319 0.65 0.625 1.313 0.906 1.981 0.1 0.238 0.2 0.469 0.294 0.706 4.55-0.569 9.069 0.344 9.519 0.438-0.031-3.225-1.188-6.188-3.087-8.512v0z',
    ]},

    {
      url: 'https://www.behance.net/g_doskasa617',
      outerSize: '128px',
      innerSize: '72px',
      bgcolor: '#1A237E',
      color: 'white',
      path: [
      'M9.3 6.4c0.9 0 1.8 0.1 2.6 0.3 0.8 0.2 1.4 0.4 2 0.8 0.6 0.4 1 0.9 1.3 1.5 0.3 0.6 0.5 1.4 0.5 2.3 0 1-0.2 1.8-0.7 2.5-0.5 0.7-1.1 1.2-2 1.6 1.2 0.4 2.1 1 2.7 1.8 0.6 0.9 0.9 1.9 0.9 3.2 0 1-0.2 1.9-0.6 2.6-0.4 0.7-0.9 1.3-1.6 1.8-0.6 0.5-1.4 0.8-2.2 1-0.8 0.2-1.7 0.3-2.6 0.3h-9.5v-19.7h9.3zM8.7 14.4c0.8 0 1.4-0.2 1.9-0.5 0.5-0.4 0.7-1 0.7-1.8 0-0.5-0.1-0.8-0.2-1.1-0.2-0.3-0.4-0.5-0.7-0.7-0.3-0.2-0.6-0.3-1-0.3-0.4-0.1-0.7-0.1-1.1-0.1h-4v4.6h4.4zM9 22.7c0.4 0 0.8 0 1.2-0.1 0.4-0.1 0.7-0.2 1-0.4 0.3-0.2 0.5-0.4 0.7-0.8 0.2-0.3 0.3-0.8 0.3-1.3 0-1-0.3-1.7-0.9-2.2-0.6-0.4-1.3-0.6-2.3-0.6h-4.7v5.4h4.6z',
      'M22.7 22.7c0.6 0.6 1.4 0.9 2.5 0.9 0.8 0 1.5-0.2 2-0.6s0.9-0.8 1-1.3h3.5c-0.6 1.7-1.4 2.9-2.5 3.7-1.1 0.7-2.5 1.1-4.1 1.1-1.1 0-2.1-0.2-3-0.5-0.9-0.4-1.7-0.9-2.3-1.5-0.6-0.7-1.1-1.4-1.4-2.4-0.3-0.9-0.5-1.9-0.5-3 0-1.1 0.2-2.1 0.5-3 0.4-0.9 0.8-1.7 1.5-2.4s1.4-1.2 2.3-1.6c0.9-0.4 1.9-0.6 3-0.6 1.2 0 2.3 0.2 3.2 0.7 0.9 0.5 1.6 1.1 2.2 1.9s1 1.7 1.3 2.7c0.3 1 0.3 2.1 0.3 3.2h-10.3c0 1.1 0.4 2.2 1 2.8zM27.2 15.2c-0.5-0.5-1.3-0.8-2.2-0.8-0.6 0-1.1 0.1-1.6 0.3-0.4 0.2-0.7 0.5-1 0.8-0.2 0.3-0.4 0.7-0.5 1-0.1 0.3-0.2 0.7-0.2 0.9h6.4c-0.1-1-0.4-1.7-0.9-2.3z',
    ]},
  ],

  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'Jquery',
    'Jekyll',
    'Sass',
    'React',
    'Webpack',
    'Git',
    'Wordpress',
    'D3'
  ],

  project: -1

}));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
