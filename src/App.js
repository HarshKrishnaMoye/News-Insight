import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";  



export default class App extends Component {
  pagesize=15;
  apikey= process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <>
      <Router>

      <LoadingBar
        color='#f11946'
        progress={this.state.progress} 
      />

      <Routes>

        <Route exact path="/" element={ <><Navbar/><Home country="in"/></>}/>


        <Route exact path="/about" element={<><Navbar/><About/></>}/>
        <Route exact path="/topnews" element={ <> <Navbar/> <News apikey={this.apikey} setProgress={this.setProgress} key="general" pageSize={this.pagesize} category="general"/></>}/>
        <Route exact path="/business" element={ <> <Navbar/> <News apikey={this.apikey} setProgress={this.setProgress} key="business" pageSize={this.pagesize} category="business"/> </>}/>
        <Route exact path="/health" element={ <> <Navbar/> <News apikey={this.apikey} setProgress={this.setProgress} key="health" pageSize={this.pagesize} category="health"/> </>}/>
        <Route exact path="/technology" element={ <> <Navbar/> <News apikey={this.apikey} setProgress={this.setProgress} key="technology" pageSize={this.pagesize} category="technology"/> </>}/>
        <Route exact path="/sports" element={ <>  <Navbar/> <News apikey={this.apikey} setProgress={this.setProgress} key="sports" pageSize={this.pagesize} category="sports"/> </>}/>
        <Route exact path="/entertainment" element={ <>  <Navbar/> <News apikey={this.apikey} setProgress={this.setProgress} key="entertainment" pageSize={this.pagesize} category="entertainment"/> </>}/>


        <Route exact path="/in" element={ <>  <Navbar country="in"/>  <News apikey={this.apikey} setProgress={this.setProgress} key="ingeneral1" pageSize={this.pagesize} category="general" country="in"/></>}/>
        <Route exact path="/topnews/in" element={ <>  <Navbar country="in"/> <News apikey={this.apikey} setProgress={this.setProgress} key="ingeneral2" pageSize={this.pagesize} category="general" country="in"/> </>}/>
        <Route exact path="/business/in" element={ <>  <Navbar country="in"/> <News apikey={this.apikey} setProgress={this.setProgress} key="inbusiness" pageSize={this.pagesize} category="business" country="in"/> </>}/>
        <Route exact path="/health/in" element={ <>  <Navbar country="in"/> <News apikey={this.apikey} setProgress={this.setProgress} key="inhealth" pageSize={this.pagesize} category="health" country="in"/> </>}/>
        <Route exact path="/technology/in" element={ <>  <Navbar country="in"/> <News apikey={this.apikey} setProgress={this.setProgress} key="intechnology" pageSize={this.pagesize} category="technology" country="in"/> </>}/>
        <Route exact path="/sports/in" element={ <>  <Navbar country="in"/> <News apikey={this.apikey} setProgress={this.setProgress} key="insports" pageSize={this.pagesize} category="sports" country="in"/> </>}/>
        <Route exact path="/entertainment/in" element={ <>  <Navbar country="in"/> <News apikey={this.apikey} setProgress={this.setProgress} key="inentertainment" pageSize={this.pagesize} category="entertainment" country="in"/> </>}/>


        <Route exact path="/us" element={ <> <Navbar country="us"/> <News apikey={this.apikey} setProgress={this.setProgress} key="usgeneral1" pageSize={this.pagesize} category="general" country="us"/> </>}/>
        <Route exact path="/topnews/us" element={ <> <Navbar country="us"/> <News apikey={this.apikey} setProgress={this.setProgress} key="usgeneral2" pageSize={this.pagesize} category="general" country="us"/></>}/>
        <Route exact path="/business/us" element={ <> <Navbar country="us"/> <News apikey={this.apikey} setProgress={this.setProgress} key="usbusiness" pageSize={this.pagesize} category="business" country="us"/></>}/>
        <Route exact path="/health/us" element={ <> <Navbar country="us"/> <News apikey={this.apikey} setProgress={this.setProgress} key="ushealth" pageSize={this.pagesize} category="health" country="us"/></>}/>
        <Route exact path="/technology/us" element={ <> <Navbar country="us"/> <News apikey={this.apikey} setProgress={this.setProgress} key="ustechnology" pageSize={this.pagesize} category="technology" country="us"/> </>}/>
        <Route exact path="/sports/us" element={ <> <Navbar country="us"/> <News apikey={this.apikey} setProgress={this.setProgress} key="ussports" pageSize={this.pagesize} category="sports" country="us"/></>}/>
        <Route exact path="/entertainment/us" element={ <> <Navbar country="us"/> <News apikey={this.apikey} setProgress={this.setProgress} key="usentertainment" pageSize={this.pagesize} category="entertainment" country="us"/></>}/>



        <Route exact path="/ae" element={ <><Navbar country="ae"/> <News apikey={this.apikey} setProgress={this.setProgress} key="aegeneral1" pageSize={this.pagesize} category="general" country="ae"/>  </>}/>
        <Route exact path="/topnews/ae" element={ <><Navbar country="ae"/> <News apikey={this.apikey} setProgress={this.setProgress} key="aegeneral2" pageSize={this.pagesize} category="general" country="ae"/> </>}/>
        <Route exact path="/business/ae" element={ <><Navbar country="ae"/> <News apikey={this.apikey} setProgress={this.setProgress} key="aebusiness" pageSize={this.pagesize} category="business" country="ae"/>  </>}/>
        <Route exact path="/health/ae" element={ <><Navbar country="ae"/> <News apikey={this.apikey} setProgress={this.setProgress} key="aehealth" pageSize={this.pagesize} category="health" country="ae"/>  </>}/>
        <Route exact path="/technology/ae" element={ <><Navbar country="ae"/> <News apikey={this.apikey} setProgress={this.setProgress} key="aetechnology" pageSize={this.pagesize} category="technology" country="ae"/>  </>}/>
        <Route exact path="/sports/ae" element={ <><Navbar country="ae"/> <News apikey={this.apikey} setProgress={this.setProgress} key="aesports" pageSize={this.pagesize} category="sports" country="ae"/>  </>}/>
        <Route exact path="/entertainment/ae" element={ <><Navbar country="ae"/> <News apikey={this.apikey} setProgress={this.setProgress} key="aeentertainment" pageSize={this.pagesize} category="entertainment" country="ae"/></>}/>



        <Route exact path="/ar" element={ <> <Navbar country="ar"/> <News apikey={this.apikey} setProgress={this.setProgress} key="argeneral1" pageSize={this.pagesize} category="general" country="ar"/></>}/>
        <Route exact path="/topnews/ar" element={ <> <Navbar country="ar"/> <News apikey={this.apikey} setProgress={this.setProgress} key="argeneral2" pageSize={this.pagesize} category="general" country="ar"/></>}/>
        <Route exact path="/business/ar" element={ <> <Navbar country="ar"/> <News apikey={this.apikey} setProgress={this.setProgress} key="arbusiness" pageSize={this.pagesize} category="business" country="ar"/></>}/>
        <Route exact path="/health/ar" element={ <> <Navbar country="ar"/> <News apikey={this.apikey} setProgress={this.setProgress} key="arhealth" pageSize={this.pagesize} category="health" country="ar"/> </>}/>
        <Route exact path="/technology/ar" element={ <> <Navbar country="ar"/> <News apikey={this.apikey} setProgress={this.setProgress} key="artechnology" pageSize={this.pagesize} category="technology" country="ar"/></>}/>
        <Route exact path="/sports/ar" element={ <> <Navbar country="ar"/> <News apikey={this.apikey} setProgress={this.setProgress} key="arsports" pageSize={this.pagesize} category="sports" country="ar"/></>}/>
        <Route exact path="/entertainment/ar" element={ <> <Navbar country="ar"/> <News apikey={this.apikey} setProgress={this.setProgress} key="arentertainment" pageSize={this.pagesize} category="entertainment" country="ar"/></>}/>



        <Route exact path="/au" element={ <><Navbar country="au"/> <News apikey={this.apikey} setProgress={this.setProgress} key="augeneral1" pageSize={this.pagesize} category="general" country="au"/> </>}/>
        <Route exact path="/topnews/au" element={ <><Navbar country="au"/> <News apikey={this.apikey} setProgress={this.setProgress} key="augeneral2" pageSize={this.pagesize} category="general" country="au"/> </>}/>
        <Route exact path="/business/au" element={ <><Navbar country="au"/> <News apikey={this.apikey} setProgress={this.setProgress} key="aubusiness" pageSize={this.pagesize} category="business" country="au"/> </>}/>
        <Route exact path="/health/au" element={ <><Navbar country="au"/> <News apikey={this.apikey} setProgress={this.setProgress} key="auhealth" pageSize={this.pagesize} category="health" country="au"/> </>}/>
        <Route exact path="/technology/au" element={ <><Navbar country="au"/> <News apikey={this.apikey} setProgress={this.setProgress} key="autechnology" pageSize={this.pagesize} category="technology" country="au"/> </>}/>
        <Route exact path="/sports/au" element={ <><Navbar country="au"/> <News apikey={this.apikey} setProgress={this.setProgress} key="ausports" pageSize={this.pagesize} category="sports" country="au"/>  </>}/>
        <Route exact path="/entertainment/au" element={ <><Navbar country="au"/> <News apikey={this.apikey} setProgress={this.setProgress} key="auentertainment" pageSize={this.pagesize} category="entertainment" country="au"/>  </>}/>



        <Route exact path="/br" element={ <><Navbar country="br"/> <News apikey={this.apikey} setProgress={this.setProgress} key="brgeneral1" pageSize={this.pagesize} category="general" country="br"/> </>}/>
        <Route exact path="/topnews/br" element={ <><Navbar country="br"/> <News apikey={this.apikey} setProgress={this.setProgress} key="brgeneral2" pageSize={this.pagesize} category="general" country="br"/> </>}/>
        <Route exact path="/business/br" element={ <><Navbar country="br"/> <News apikey={this.apikey} setProgress={this.setProgress} key="brbusiness" pageSize={this.pagesize} category="business" country="br"/> </>}/>
        <Route exact path="/health/br" element={ <><Navbar country="br"/> <News apikey={this.apikey} setProgress={this.setProgress} key="brhealth" pageSize={this.pagesize} category="health" country="br"/>  </>}/>
        <Route exact path="/technology/br" element={ <><Navbar country="br"/> <News apikey={this.apikey} setProgress={this.setProgress} key="brtechnology" pageSize={this.pagesize} category="technology" country="br"/>  </>}/>
        <Route exact path="/sports/br" element={ <><Navbar country="br"/> <News apikey={this.apikey} setProgress={this.setProgress} key="brsports" pageSize={this.pagesize} category="sports" country="br"/> </>}/>
        <Route exact path="/entertainment/br" element={ <><Navbar country="br"/> <News apikey={this.apikey} setProgress={this.setProgress} key="brentertainment" pageSize={this.pagesize} category="entertainment" country="br"/> </>}/>



        <Route exact path="/ca" element={ <><Navbar country="ca"/><News apikey={this.apikey} setProgress={this.setProgress} key="cageneral1" pageSize={this.pagesize} category="general" country="ca"/>  </>}/>
        <Route exact path="/topnews/ca" element={ <><Navbar country="ca"/><News apikey={this.apikey} setProgress={this.setProgress} key="cageneral2" pageSize={this.pagesize} category="general" country="ca"/> </>}/>
        <Route exact path="/business/ca" element={ <><Navbar country="ca"/><News apikey={this.apikey} setProgress={this.setProgress} key="cabusiness" pageSize={this.pagesize} category="business" country="ca"/> </>}/>
        <Route exact path="/health/ca" element={ <><Navbar country="ca"/><News apikey={this.apikey} setProgress={this.setProgress} key="cahealth" pageSize={this.pagesize} category="health" country="ca"/> </>}/>
        <Route exact path="/technology/ca" element={ <><Navbar country="ca"/><News apikey={this.apikey} setProgress={this.setProgress} key="catechnology" pageSize={this.pagesize} category="technology" country="ca"/> </>}/>
        <Route exact path="/sports/ca" element={ <><Navbar country="ca"/><News apikey={this.apikey} setProgress={this.setProgress} key="casports" pageSize={this.pagesize} category="sports" country="ca"/> </>}/>
        <Route exact path="/entertainment/ca" element={ <><Navbar country="ca"/><News apikey={this.apikey} setProgress={this.setProgress} key="caentertainment" pageSize={this.pagesize} category="entertainment" country="ca"/> </>}/>



        <Route exact path="/ch" element={ <><Navbar country="ch"/> <News apikey={this.apikey} setProgress={this.setProgress} key="chgeneral1" pageSize={this.pagesize} category="general" country="ch"/> </>}/>
        <Route exact path="/topnews/ch" element={ <><Navbar country="ch"/> <News apikey={this.apikey} setProgress={this.setProgress} key="chgeneral2" pageSize={this.pagesize} category="general" country="ch"/> </>}/>
        <Route exact path="/business/ch" element={ <><Navbar country="ch"/> <News apikey={this.apikey} setProgress={this.setProgress} key="chbusiness" pageSize={this.pagesize} category="business" country="ch"/> </>}/>
        <Route exact path="/health/ch" element={ <><Navbar country="ch"/> <News apikey={this.apikey} setProgress={this.setProgress} key="chhealth" pageSize={this.pagesize} category="health" country="in"/> </>}/>
        <Route exact path="/technology/ch" element={ <><Navbar country="ch"/> <News apikey={this.apikey} setProgress={this.setProgress} key="chtechnology" pageSize={this.pagesize} category="technology" country="ch"/> </>}/>
        <Route exact path="/sports/ch" element={ <><Navbar country="ch"/> <News apikey={this.apikey} setProgress={this.setProgress} key="chsports" pageSize={this.pagesize} category="sports" country="ch"/> </>}/>
        <Route exact path="/entertainment/ch" element={ <><Navbar country="ch"/> <News apikey={this.apikey} setProgress={this.setProgress} key="chentertainment" pageSize={this.pagesize} category="entertainment" country="ch"/> </>}/>



        <Route exact path="/cn" element={ <><Navbar country="cn"/><News apikey={this.apikey} setProgress={this.setProgress} key="cngeneral1" pageSize={this.pagesize} category="general" country="cn"/>  </>}/>
        <Route exact path="/topnews/cn" element={ <><Navbar country="cn"/><News apikey={this.apikey} setProgress={this.setProgress} key="cngeneral2" pageSize={this.pagesize} category="general" country="cn"/> </>}/>
        <Route exact path="/business/cn" element={ <><Navbar country="cn"/><News apikey={this.apikey} setProgress={this.setProgress} key="cnbusiness" pageSize={this.pagesize} category="business" country="cn"/> </>}/>
        <Route exact path="/health/cn" element={ <><Navbar country="cn"/><News apikey={this.apikey} setProgress={this.setProgress} key="cnhealth" pageSize={this.pagesize} category="health" country="cn"/> </>}/>
        <Route exact path="/technology/cn" element={ <><Navbar country="cn"/><News apikey={this.apikey} setProgress={this.setProgress} key="cntechnology" pageSize={this.pagesize} category="technology" country="cn"/> </>}/>
        <Route exact path="/sports/cn" element={ <><Navbar country="cn"/><News apikey={this.apikey} setProgress={this.setProgress} key="cnsports" pageSize={this.pagesize} category="sports" country="cn"/> </>}/>
        <Route exact path="/entertainment/cn" element={ <><Navbar country="cn"/><News apikey={this.apikey} setProgress={this.setProgress} key="cnentertainment" pageSize={this.pagesize} category="entertainment" country="cn"/> </>}/>




        <Route exact path="/co" element={ <> <Navbar country="co"/> <News apikey={this.apikey} setProgress={this.setProgress} key="cogeneral1" pageSize={this.pagesize} category="general" country="co"/></>}/>
        <Route exact path="/topnews/co" element={ <> <Navbar country="co"/> <News apikey={this.apikey} setProgress={this.setProgress} key="cogeneral2" pageSize={this.pagesize} category="general" country="co"/></>}/>
        <Route exact path="/business/co" element={ <> <Navbar country="co"/> <News apikey={this.apikey} setProgress={this.setProgress} key="cobusiness" pageSize={this.pagesize} category="business" country="co"/></>}/>
        <Route exact path="/health/co" element={ <> <Navbar country="co"/> <News apikey={this.apikey} setProgress={this.setProgress} key="cohealth" pageSize={this.pagesize} category="health" country="co"/></>}/>
        <Route exact path="/technology/co" element={ <> <Navbar country="co"/>< News apikey={this.apikey} setProgress={this.setProgress} key="cotechnology" pageSize={this.pagesize} category="technology" country="co"/></>}/>
        <Route exact path="/sports/co" element={ <> <Navbar country="co"/> <News apikey={this.apikey} setProgress={this.setProgress} key="cosports" pageSize={this.pagesize} category="sports" country="co"/></>}/>
        <Route exact path="/entertainment/co" element={ <> <Navbar country="co"/> <News apikey={this.apikey} setProgress={this.setProgress} key="coentertainment" pageSize={this.pagesize} category="entertainment" country="co"/></>}/>

      </Routes>

      </Router>
      </>
    )
  }
}


