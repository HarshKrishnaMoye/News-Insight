import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export class Navbar extends Component {

  static defaultProps ={
    country : "in"
  }

  static propTypes ={
    country : PropTypes.string
  }
  render(props) {
    return (
      <div>
        <nav className="navbar  navbar-expand-lg bg-body-tertiary fixed-top " data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">News Insight</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={`/topnews/${this.props.country}`}>Top News</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={`/business/${this.props.country}`}>Business</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={`/health/${this.props.country}`}>Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={`/technology/${this.props.country}`}>Technology</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={`/sports/${this.props.country}`}>Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={`/entertainment/${this.props.country}`}>Entertainment</Link>
                    </li>
                    
                </ul>
                <form className="d-flex" role="search">
                <div className="dropdown mx-2 my-1">
                  <button className="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Country
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/in">India</Link></li>
                    <li><Link className="dropdown-item" to="/us">United States</Link></li>
                    <li><Link className="dropdown-item" to="/ae">United Arab Emirates</Link></li>
                    <li><Link className="dropdown-item" to="/ar">Argentina</Link></li>
                    <li><Link className="dropdown-item" to="/au">Australia</Link></li>
                    <li><Link className="dropdown-item" to="/br">Brazil</Link></li>
                    <li><Link className="dropdown-item" to="/ca">Canada</Link></li>
                    <li><Link className="dropdown-item" to="/ch">Switzerland</Link></li>
                    <li><Link className="dropdown-item" to="/cn">China</Link></li>
                    <li><Link className="dropdown-item" to="/co">Colombia</Link></li>
                  </ul>
                </div>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
