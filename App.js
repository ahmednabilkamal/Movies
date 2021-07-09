import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './src/redux/reducers/index';
import AppNavigation from './src/navigation/navigation';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
