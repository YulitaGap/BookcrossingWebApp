import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './pages/App'
import About from './pages/About'
import Share from './pages/Share'
import Choice from './pages/Choose'
import Contact from './pages/Contact'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={App} />
      <Route path="/about" component={About} />
      <Route path="/add-book" component={Share} />
      <Route path="/choose-book" component={Choice} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))


