import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkModeContextProvider } from "./context/darkModeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './app/store'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if (process.env.NODE_ENV === 'production') disableReactDevTools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <Provider store={store}>
        <App />
        </Provider>
    </DarkModeContextProvider>
  </React.StrictMode >,
)
