import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo-nav"
        />
      </Link>
      <ul className="nav-container">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/jobs" className="nav-link">
            <li>Jobs</li>
          </Link>
        </div>
        <div>
          <button type="button" className="logout" onClick={onClickLogout}>
            <li>Logout</li>
          </button>
        </div>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
