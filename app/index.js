import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/es/integration/react'

import configureStore from './store/configureStore'
import App from './containers/App'

const {store,persistor} = configureStore()

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    )
  }
}
