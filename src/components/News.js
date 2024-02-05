import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  // articles=[
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Courrier International"
  //     },
  //     "author": null,
  //     "title": "En Australie, la ruée vers l’or blanc passe par le “corridor du lithium”",
  //     "description": "Multinationales et magnats australiens de l’industrie minière se disputent le contrôle des gisements de lithium de l’île-continent. L’État d’Australie-Occidentale fournit déjà près de la moitié de cette matière première essentielle à la transition énergétique…",
  //     "url": "https://www.courrierinternational.com/article/minerais-en-australie-la-ruee-vers-l-or-blanc-passe-par-le-corridor-du-lithium",
  //     "urlToImage": "https://focus.courrierinternational.com/2024/01/17/0/0/6000/4000/1200/630/60/0/fee3c9a_1705499992990-carbonate-lithium-chili.jpg",
  //     "publishedAt": "2024-01-27T11:23:02Z",
  //     "content": "Les vastes étendues désertiques dAustralie-Occidentale, après avoir été des décennies durant le terrain de prédilection des chercheurs dor, de nickel et de fer, sont devenues le grand champ de batail… [+2289 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "techcrunch.com",
  //     "title": "Tesla to spend $500M to bring its Dojo supercomputer project to Buffalo factory",
  //     "description": "Tesla will spend $500 million to build one of its so-called “Dojo” supercomputers at its Buffalo, New York factory, the state’s governor Kathy Hochul said Friday during a news conference just days after CEO Elon Musk called the project a “long shot.” Tesla’s …",
  //     "url": "https://biztoc.com/x/81301e25b98ac902",
  //     "urlToImage": "https://c.biztoc.com/p/81301e25b98ac902/og.webp",
  //     "publishedAt": "2024-01-27T11:20:09Z",
  //     "content": "Tesla will spend $500 million to build one of its so-called Dojo supercomputers at its Buffalo, New York factory, the states governor Kathy Hochul said Friday during a news conference just days after… [+297 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Yahoo Entertainment"
  //     },
  //     "author": null,
  //     "title": "Is Tesla a Millionaire Maker?",
  //     "description": null,
  //     "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_f9b0f7d1-80e7-4106-8f74-376b33093149",
  //     "urlToImage": null,
  //     "publishedAt": "2024-01-27T11:14:00Z",
  //     "content": "Si vous cliquez sur « Tout accepter », nos partenaires (y compris 244 qui font partie du Cadre de transparence et de consentement dIAB) et nous utiliserons également des témoins et vos données person… [+982 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Abertoatedemadrugada.com"
  //     },
  //     "author": "Carlos Martins",
  //     "title": "BYD Tang expande bateria para fazer frente ao Model Y",
  //     "description": "A BYD expandiu consideravelmente a autonomia do Tang com uma nova bateria, para fazer frente ao Model Y da Tesla.",
  //     "url": "https://abertoatedemadrugada.com/2024/01/byd-tang-expande-bateria-para-fazer.html",
  //     "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFXNeOa6UfF5ldKpCnctgaqdqW7cq92awHZWySnIbvH109cAkVwXXvaWVOUIcryckpfXByYHw5SC5MnFFgXoac9ScLxhbF4Y9xE-_A3XlD7K34vY_5TheGGJn9GT8Oonz7CsbvYCXdPMl8wutR-PexaKSg0SjK7lyIFDanzj-ZNZ_77A5dNxXDMo-EgXQq/w1200-h630-p-k-no-nu/BYDtang.jpg",
  //     "publishedAt": "2024-01-27T11:00:00Z",
  //     "content": "A BYD expandiu consideravelmente a autonomia do Tang com uma nova bateria, para fazer frente ao Model Y da Tesla.\n\n\nA BYD comercializa o Tang como sendo um \"Model X barato\", que inevitavelmente o col… [+1101 chars]"
  //   },
    
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Biztoc.com"
  //     },
  //     "author": "investorplace.com",
  //     "title": "The 2 Biggest Winners and Losers of Earnings Season So Far…",
  //     "description": "We were treated to results from four well-known companies this week... We may not be in the heart of the fourth-quarter earnings season just yet (earnings results will start to come in fast and furious next week). But we were still treated to results from fou…",
  //     "url": "https://biztoc.com/x/17673105ff5fc559",
  //     "urlToImage": "https://c.biztoc.com/p/17673105ff5fc559/s.webp",
  //     "publishedAt": "2024-01-26T23:02:22Z",
  //     "content": "We were treated to results from four well-known companies this week...We may not be in the heart of the fourth-quarter earnings season just yet (earnings results will start to come in fast and furiou… [+286 chars]"
  //   }
  // ]
  constructor(){
    super();
    this.state={
      articles:[],
      loading:false
    }
  }
  async componentDidMount(){
    // console.log('hello');
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3714a8e6159945e9a259a26e6a21b516";
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  render() {
    // console.log('render')
    return (
      <div className='container my-3'>
        <h1>NewsMonkey- Top headlines</h1>
        
        <div className='row '>
        {  this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItems  title= {element.title ? element.title.slice(0, 45) : ""} description={element.description?element.description.slice(0,40):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
           
            </div>
            
        })}
        </div>
      </div>
    )
  }
}

export default News
