import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Contact from './views/contact'
import Home from './views/home'
import UnServices from './views/un-services'
import Inicio from './views/inicio'
import Originality from './views/originality'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Contact} path="/contact" />
        <Route exact component={Home} path="/" />
        <Route exact component={UnServices} path="/un-services" />
        <Route exact component={Inicio} path="/inicio" />
        <Route exact component={Originality} path="/originality" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
