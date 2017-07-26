import React from 'react';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import TestScreen from './components/TestScreen.js';
import { AppNavigator, nav } from './Navigators.js';

//SANDBOX START
function test(state = {}, action) {
  switch (action.type) {
    case 'SET_SUBS':
      return {...state, subs: action.subs};
    default:
      return state;
  }
}
//SANDBOX END

const appReducer = combineReducers({
  nav,
  test
});

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log('\nTHIS IS PROPS IN APP\n'+ JSON.stringify(props, null, 2));
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/user?id=16`)
    .then(res => res.json())
    .then(data => {
      // console.log('\nTHIS IS FETCHED USERDATA\n'+ JSON.stringify(data, null, 2));
      store.dispatch({type: 'SET_SUBS', subs: data.subreddits.map(sub => sub.title)});
    });
  }

  render() {
    return <AppNavigator />;
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});


App = connect(mapStateToProps)(App);

const store = createStore(appReducer);

//SANDBOX START
store.dispatch({type:'SET_SUBS', subs: ['local', 'events', 'today']});
//SANDBOX END

class Root extends React.Component {
  constructor(props) {
    super(props);
    // console.log('\nTHIS IS PROPS IN ROOT\n'+ JSON.stringify(props, null, 2));
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


export { Root, App, store }

// console.log('\nTHIS IS THE STATE IN THE STORE\n' + JSON.stringify(store.getState(), null, 2));
