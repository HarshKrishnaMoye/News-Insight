import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Image from "./android-chrome-192x192.png"
import '../App.css';

export class Home extends Component {
  render() {
    return (
      <div>
         <h1 className="text-center" style={{marginTop:"100px"}}>Welcome to News Insight</h1>
         <img className="img rounded mx-auto d-block my-5" src={Image} alt="Logo" />
        <div className="container my-5 border rounded-pill bg-dark  ">
            <div className="container d-flex justify-content-around my-5">
            <button type="button" className="btn btn-light"><Link className="nav-link" to={`/topnews/${this.props.country}`}>Read about Top News</Link></button>
            <button type="button" className="btn btn-light"><Link className="nav-link" to={`/business/${this.props.country}`}>Read about Business</Link></button>
            <button type="button" className="btn btn-light"> <Link className="nav-link" to={`/health/${this.props.country}`}>Read about Health</Link></button>   
            </div>
            <div className="container d-flex justify-content-around my-5">
            <button type="button" className="btn btn-light"><Link className="nav-link" to={`/technology/${this.props.country}`}>Read about Technology</Link></button>
            <button type="button" className="btn btn-light"><Link className="nav-link" to={`/sports/${this.props.country}`}>Read about Sports</Link></button>
            <button type="button" className="btn btn-light"><Link className="nav-link" to={`/entertainment/${this.props.country}`}>Read about Entertainment</Link></button>   
            </div>
            <h3 style={{position:"fixed", left:"150px", bottom:"0px"}}>This Website Is Created By Harsh Krishna Moye Using Reactjs , Bootstrap and NewsAPI</h3>
            
          
        </div>  
      </div>
    )
  }
}

export default Home
