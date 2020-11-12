import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './Routes'
import GlobalStyle from './globalStyle'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-activity/dist/react-activity.css'

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
