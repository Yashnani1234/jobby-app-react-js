import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import Login from './LoginRoute'
import Jobs from './Jobs'
import AboutJob from './About job'
import NotFound from './Not Found'
import ProtectedRoute from './ProtectedRoute'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJob} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
