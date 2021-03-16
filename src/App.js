import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import HeaderContainer from './components/Header/HeaderContainer'
import Main from './components/Main/Main'
import store from './redux/reduxStore'

const App = (props) => (
  <BrowserRouter>
    <Provider store={store}>
      <HeaderContainer />
      <Main />
    </Provider>
  </BrowserRouter>
)

export default App
