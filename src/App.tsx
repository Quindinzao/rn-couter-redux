/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
