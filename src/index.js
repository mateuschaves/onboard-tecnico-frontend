import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import GlobalStyle from './globalStyle'
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
