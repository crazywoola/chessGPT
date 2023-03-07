import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import OpenAIContextProvider from './ctx/openai'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OpenAIContextProvider>
      <App />
    </OpenAIContextProvider>
  </React.StrictMode>,
)
