import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imgUrl,newsUrl,date,author,source} = this.props;
    return (
      <div className='my-3 mx-5'>
            <div className="card" style={{width: "18rem"}}>
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                       {source}
             </span>
                <img src={imgUrl?imgUrl:"https://i.pinimg.com/736x/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.jpg"} className="card-img-top" alt="NewsImage"/>
                <div className="card-body">
                    <h5 className="card-title">
                      {title} 
                    </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
