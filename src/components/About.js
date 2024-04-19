import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
       <div className="container">
        <h1 className="text-center"style={{marginTop:"100px"}}>About Us</h1>
        <p className="text-center my-5"><strong>Welcome to InsightNews.com: Your Gateway to Informed Perspectives</strong></p>
        <p className="text-center my-1"> At InsightNews.com, we pride ourselves on being more than just another news website. We're your trusted destination for gaining deeper insights into the world around you. With a commitment to delivering diverse perspectives, <strong>in-depth analysis</strong>, and <strong>unbiased reporting</strong>, we offer a comprehensive platform designed to keep you informed and engaged. Embark on a journey of discovery with InsightNews.com, where every story is told from multiple angles, ensuring you get a well-rounded view of the issues that matter most. Our team of experienced journalists and experts provide <strong>in-depth analysis</strong> and context, empowering you to understand the complexities of today's world. We believe in upholding the highest standards of journalistic integrity. That means delivering news in a fair, accurate, and unbiased manner, free from spin or agenda. You can trust InsightNews.com to provide reliable information that you can rely on. Join a vibrant community of engaged readers who are passionate about staying informed and making sense of the news. Participate in live discussions, share your thoughts and opinions, and connect with like-minded individuals from around the globe. Tailor your news experience to suit your interests with personalized recommendations. Whether you're interested in breaking news alerts, <strong>in-depth features</strong>, or thought-provoking analysis, you can customize your feed to prioritize the content that matters most to you. Explore InsightNews.com today and discover a new way to engage with the news. Stay informed, stay engaged, and together, let's make sense of the world. Welcome to InsightNews.com, where informed perspectives await.</p>
        <h3 style={{position:"fixed", left:"150px", bottom:"0px"}}>This Website Is Created By Harsh Krishna Moye Using Reactjs , Bootstrap and NewsAPI</h3>
       </div>
      </div>
    )
  }
}

export default About
