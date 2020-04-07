import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket', 
  'Warning: Each child'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#04D361" />
      <Routes />
    </>
  );
}
