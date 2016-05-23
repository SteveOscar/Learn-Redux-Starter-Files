import React from 'react'

import { render } from 'react-dom'

//Import css
import css from './styles/style.styl'

//Import Componenets
import App from './componenets/App'
import Single from './componenets/Single'
import PhotoGrid from './componenets/PhotoGrid'

//Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>

    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
