import React from 'react'
import { render } from 'react-dom'

// import componenet
import App from '../imports/components/App'

// import react-router deps
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from '../imports/store/store'

const router = (
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
)

Meteor.startup(() => {
  render(router, document.getElementById('root'))
})
