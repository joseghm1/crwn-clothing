import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { robots } from './robots.js'
//import CardList from './CardList.jsx'
import App from './containers/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)

/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardList robots = {robots}/>
  </StrictMode>
)

*/