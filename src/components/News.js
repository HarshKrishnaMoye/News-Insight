import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

 

  static defaultProps ={
    category : "general",
    pageSize : 15,
    country : "in"
  }

  static propTypes ={
    category : PropTypes.string,
    pageSize : PropTypes.number,
    country : PropTypes.string,
    apikey : PropTypes.string
  }

 capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }




  constructor(){
    super();
 

    this.state={
      articles :[],
      loading : false,
      page:1
    }

    // document.title=`NewsInsight - ${this.capitalizeFirstLetter(this.props.category)}`;

  }

  async componentDidMount(){
    this.props.setProgress(10);
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(newsUrl);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles : parsedData.articles,
      totalResults :parsedData.totalResults,
      loading:false
    })
    this.props.setProgress(100);
  
  }

  handlePrevClick= async()=>{
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(newsUrl);
    let parsedData = await data.json();
    this.setState({
      page:this.state.page - 1,
      articles : parsedData.articles,
      loading:false
    })

  }

  handleNextClick= async()=>{
    if(!((this.state.page + 1) > (Math.ceil(this.state.totalResults/this.props.pageSize)))){
      let newsUrl = `https://newsapi.org/v2/top-headlinescountry=${this.props.country}&apiKey=7${this.props.apikey}&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
      this.setState({
        loading:true
      })
      let data = await fetch(newsUrl);
      let parsedData = await data.json();
      this.setState({
        page:this.state.page + 1,
        articles : parsedData.articles,
        loading:false
      })
    }
   
  }

  render() {
    return (
          <div className="container my-5">
              <h2 className="text-center" style={{marginTop:"100px"}}>News Insight - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
              {this.state.loading && <Spinner/>}
              <div className="row my-5">
                    {!this.state.loading && this.state.articles.map((element)=>{
                      // console.log(element)

                      return   <div className="col-md-4"  key={element.url}>
                      <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Author"} date={element.publishedAt} source={element.source.name}/> 
                      </div>

                    })} 
              </div>

              <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark mx-4 my-5" onClick={this.handlePrevClick}>	&larr; Previous</button>
              <button disabled={(this.state.page + 1) > (Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark me-5 my-5" onClick={this.handleNextClick}>Next	&rarr;</button>
              </div>
          
          </div>
    )
  }
}

export default News
