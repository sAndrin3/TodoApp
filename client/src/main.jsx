import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { ContextProvider } from './context/userContext/Context.jsx'
// import { UIContextProvider } from './context/todoContext/Context.jsx'
import { store } from './Redux/store.jsx'
import {Provider} from 'react-redux' 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ContextProvider> */}
      <Provider store = {store}>
        <App />
      </Provider>
    {/* </ContextProvider> */}
  </React.StrictMode>,
)
