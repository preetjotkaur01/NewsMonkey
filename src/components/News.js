import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
  constructor(){
    super();
    console.log("I am constructor of news component"); 
    this.state = {
      articles : [],
      loading : false
    }
  }

  async componentDidMount()
  {
     console.log("cdm");
     let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2d33366ebb3247509dd236105de0dd32";
     let data = await fetch(url);
     let parsedData = await data.json();
     console.log(parsedData);
     this.setState({articles:parsedData.articles});
  }
  render() {
    console.log("render");
    return (
      <div className='container'>
         <h1>News Monkey : Top headlines</h1>
         <div className='row'>
         {this.state.articles.map((element)=>{
             return <div className='col-md-4 my-2'>
             <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} ImageUrl={element.urlToImage} newsUrl={element.url} />
             </div>
         })}  
      
         </div>     
      </div>
    )
  }
}

export default News
