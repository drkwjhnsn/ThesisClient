import React from 'react';
import { ScrollView } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import { store } from './';
import TestScreen from './components/TestScreen.js';
import SubbedMap from './components/SubbedMap.js';

// const DynamicDrawer = (props) => (
//   <ScrollView >
//     <DrawerItems {...props} items={[
//       {key: 'Home', routeName: 'Home', params: { name: 'first' }},
//       {key: 'Home', routeName: 'Home', params: { name: 'first' }},
//     ]} />
//   </ScrollView>
// );
const DynamicDrawer = (props) => (
  <ScrollView >
    <DrawerItems {...props} />
  </ScrollView>
);

// <DrawerItems {...props} items={[{routeName: 'Test', key: 'Test'}]} contentOptions={{items: [{routeName: 'Test', key: 'Test'}]}}/>
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

const Drawer = DrawerNavigator({
  Home: {screen: SubbedMap}
}, {contentComponent: DynamicDrawer});

const AppNavigator = StackNavigator({
  Drawer: {screen: Drawer},
  Posts: {screen: TestScreen},
});

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Posts'));

const nav = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // console.log('\nTHIS IS STATE IN NAVREDUCER\n'+ JSON.stringify(state, null, 2));

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export { AppNavigator, nav };
