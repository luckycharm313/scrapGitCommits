import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { Provider } from 'react-redux'
import getStore from './reducers'
import 'bootstrap/dist/css/bootstrap.css'
const { store, persistor } = getStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
