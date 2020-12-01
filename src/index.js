import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#00486e" />
        <Routes />
    </>
);

export default App;