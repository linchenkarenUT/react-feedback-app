import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// pass the app component to the div root 
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>, 
    document.getElementById('root')
)