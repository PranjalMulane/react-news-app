import React, { Component } from 'react'
import Newsitems from './Newsitems'

export default class News extends Component {

     articles = [
          {
               "source": {
                    "id": null,
                    "name": "CNBC"
               },
               "author": "Peter Schacknow",
               "title": "Stocks making the biggest moves premarket: BioNTech, Five Below, Lululemon and others - CNBC",
               "description": "These are the stocks posting the largest moves before the bell.",
               "url": "https://www.cnbc.com/2022/03/30/stocks-making-the-biggest-moves-premarket-biontech-five-below-lululemon-and-others.html",
               "urlToImage": "https://image.cnbcfm.com/api/v1/image/106792254-1605109106759-gettyimages-1229548499-20090101201109-99-269063.jpeg?v=1605109305&w=1920&h=1080",
               "publishedAt": "2022-03-30T11:48:51Z",
               "content": "Check out the companies making headlines before the bell:\r\nBioNTech (BNTX) The drug maker's shares jumped 5.9% in the premarket after reporting significantly better-than-expected revenue and profit f… [+2434 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "Yahoo Entertainment"
               },
               "author": "Emily McCormick",
               "title": "Stock market news live updates: Stock futures dip after S&P 500 closes at highest level since Jan. - Yahoo Finance",
               "description": "U.S. stock futures drifted slightly lower after rallying on Tuesday, as investors cheered upbeat developments on discussions between Russia and Ukraine.",
               "url": "https://finance.yahoo.com/news/stock-market-news-live-updates-march-30-2022-221646047.html",
               "urlToImage": "https://s.yimg.com/ny/api/res/1.2/VQFaYzwFLDCs66O19fGUdQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-03/cc89a480-afa5-11ec-9f5f-e6fbac52a73c",
               "publishedAt": "2022-03-30T11:34:59Z",
               "content": "U.S. stock futures drifted slightly lower after rallying on Tuesday, as investors cheered upbeat developments on discussions between Russia and Ukraine.\r\nContracts on the S&amp;P 500 declined. The bl… [+7623 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "CNBC"
               },
               "author": "Diana Olick",
               "title": "Mortgage refinance demand plunges 60%, as rates hit their highest level since 2018 - CNBC",
               "description": "A sharp increase in mortgage rates causes a plunge in refinance demand.",
               "url": "https://www.cnbc.com/2022/03/30/mortgage-refinance-demand-plunges-60percent-as-rates-hit-their-highest-level-since-2018.html",
               "urlToImage": "https://image.cnbcfm.com/api/v1/image/106712974-1600806715637-zhouse.jpg?v=1648585546&w=1920&h=1080",
               "publishedAt": "2022-03-30T11:01:39Z",
               "content": "Mortgage rates took another jump higher last week, taking their toll on current borrowers who might have wanted to refinance. Demand from homebuyers, however, appears to be hanging in for now.\r\nTotal… [+1799 chars]"
          },
          {
               "source": {
                    "id": "google-news",
                    "name": "Google News"
               },
               "author": null,
               "title": "Dow Jones Futures Fall After Stocks Jump On Russia-Ukraine Talks; Apple, Dutch Bros Break Out - Investor's Business Daily",
               "description": null,
               "url": "https://news.google.com/__i/rss/rd/articles/CBMiiwFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtc3RvY2tzLWp1bXAtb24tcnVzc2lhLXVrcmFpbmUtdGFsa3MtYXBwbGUtZHV0Y2gtYnJvcy1icmVhay1vdXQv0gEA?oc=5",
               "urlToImage": null,
               "publishedAt": "2022-03-30T10:09:00Z",
               "content": null
          },
          {
               "source": {
                    "id": "cnn",
                    "name": "CNN"
               },
               "author": "Julia Horowitz, CNN Business",
               "title": "Workers stayed in their jobs for years. Now they want a change - CNN",
               "description": "In the past 12 months, a record number of Americans have quit their jobs, and workers around the world have been paying attention.",
               "url": "https://www.cnn.com/2022/03/30/economy/great-resignation-uk-australia-europe/index.html",
               "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220221163858-restricted-01-great-resignation-global-super-tease.jpg",
               "publishedAt": "2022-03-30T10:05:00Z",
               "content": "London (CNN Business)In the past 12 months, a record number of Americans have quit their jobs, and workers around the world have been paying attention.\r\n\"The Great Resignation is people saying, 'What… [+10222 chars]"
          },
          {
               "source": {
                    "id": "usa-today",
                    "name": "USA Today"
               },
               "author": "Adrianna Rodriguez, USA TODAY",
               "title": "Who can get a second Pfizer or Moderna COVID-19 vaccine booster? Here's what you should know. - USA TODAY",
               "description": "The CDC says the extra booster is especially important for people 65 and older, and those 50 and older who have underlying medical conditions.",
               "url": "https://www.usatoday.com/story/news/health/2022/03/30/covid-vaccine-second-booster-pfizer-moderna/7208497001/",
               "urlToImage": "https://www.gannett-cdn.com/presto/2022/02/16/USAT/9427354e-7843-42a9-a521-8bda58a7fee3-AP_Virus_Outbreak-Vaccines-Infants.jpg?auto=webp&crop=5218,2935,x0,y0&format=pjpg&width=1200",
               "publishedAt": "2022-03-30T09:02:42Z",
               "content": "In a flurryof federal action, two of the nation’s top health agencies authorized and expanded COVID-19 vaccine eligibility to allow older Americans to receive a second booster shot.\r\nOn Tuesday, the … [+4781 chars]"
          },
          {
               "source": {
                    "id": "financial-times",
                    "name": "Financial Times"
               },
               "author": null,
               "title": "Strains in $23tn US government debt market intensify as Fed tightens monetary policy - Financial Times",
               "description": "Treasuries set to post worst quarter of returns since at least 1973 on inflation and rate rise fears",
               "url": "https://www.ft.com/content/3494abc9-0b87-4206-8ad3-9e09b5e11730",
               "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ffe459eca-ebb8-4572-833a-694fe585ca7c.jpg?source=next-opengraph&fit=scale-down&width=900",
               "publishedAt": "2022-03-30T09:00:50Z",
               "content": "Investors’ ability to trade US government debt has deteriorated to its lowest point since the ructions of March 2020, deepening worries about the world’s most important bond market as the Federal Res… [+3604 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "New York Times"
               },
               "author": "Cade Metz",
               "title": "Turing Award Won by Programmer Who Paved Way for Supercomputers - The New York Times",
               "description": "In the 1970s, Jack Dongarra created code and concepts that allowed software to work easily with the world’s most powerful computing machines.",
               "url": "https://www.nytimes.com/2022/03/30/technology/turing-award-jack-dongarra.html",
               "urlToImage": "https://static01.nyt.com/images/2022/03/30/business/30turing-award1/30turning-award1-facebookJumbo.jpg",
               "publishedAt": "2022-03-30T09:00:32Z",
               "content": "In the late 1970s, as a young researcher at Argonne National Laboratory outside Chicago, Jack Dongarra helped write computer code called Linpack.\r\nLinpack offered a way to run complex mathematics on … [+1087 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "HODINKEE"
               },
               "author": "Logan Baker",
               "title": "The New-For-2022 Patek Philippe Calatrava 5226G - HODINKEE",
               "description": "Syringe hands! Smooth bezel! Black and tan! And a new home for Patek's traditional hobnail decoration.",
               "url": "https://www.hodinkee.com/articles/patek-philippe-calatrava-5226g",
               "urlToImage": "https://hodinkee.imgix.net/uploads/images/4122f4c7-9005-48c7-8ed7-1eaccf0145dd/patek5526hero.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&w=1200&h=630&fit=crop",
               "publishedAt": "2022-03-30T08:10:00Z",
               "content": "Patek Philippe has introduced a whole new design language within the classical Calatrava collection at Watches &amp; Wonders Geneva 2022. The refreshed aesthetic uses the round case the Calatrava fam… [+3697 chars]"
          },
          {
               "source": {
                    "id": "reuters",
                    "name": "Reuters"
               },
               "author": null,
               "title": "Auto manufacturers scramble as Shanghai locks down - Reuters",
               "description": "(This March 29 story corrects Thyssenkrupp statement in fourth paragraph after company clarifies that the facility assembles production lines for powertrains and other products rather than producing powertrains)",
               "url": "https://www.reuters.com/business/autos-transportation/gm-keeps-up-shanghai-output-with-workers-sleeping-factory-floor-sources-2022-03-29/",
               "urlToImage": "https://www.reuters.com/resizer/omwdjMb4L-zFV3l9r-_oOc51HeI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AVJUFJ2MIFNKDND5W7YXKFTXY4.jpg",
               "publishedAt": "2022-03-30T07:51:00Z",
               "content": "SHANGHAI, March 29 (Reuters) - (This March 29 story corrects Thyssenkrupp statement in fourth paragraph after company clarifies that the facility assembles production lines for powertrains and other … [+4789 chars]"
          },
          {
               "source": {
                    "id": "reuters",
                    "name": "Reuters"
               },
               "author": null,
               "title": "Vietnam's Vinfast to build $2 bln electric vehicle factory in U.S. - Reuters",
               "description": "Vietnam's automaker VinFast said on Tuesday it has signed a preliminary deal to initially invest $2 billion to build a factory in North Carolinato make electric buses, sport utility vehicles (SUVs) along with batteries for EVs.",
               "url": "https://www.reuters.com/business/autos-transportation/vietnams-vinfast-build-2-bln-electric-vehicle-factory-us-2022-03-29/",
               "urlToImage": "https://www.reuters.com/resizer/rvVTg0i1sF5ntCvNz7DRT9IW-EM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZMSEJFM23ZN3HC7GV7IWWJX5VQ.jpg",
               "publishedAt": "2022-03-30T06:12:00Z",
               "content": "HANOI/SAN FRANCISCO, March 29 (Reuters) - Vietnam's automaker VinFast said on Tuesday it has signed a preliminary deal to initially invest $2 billion to build a factory in North Carolinato make elect… [+2562 chars]"
          },
          {
               "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
               },
               "author": "Phil Rosen",
               "title": "One of the largest crypto hacks ever hits Ronin Network - Markets Insider",
               "description": "",
               "url": "https://markets.businessinsider.com/news/currencies/crypto-hack-ronin-network-heist-cybercrime-cryptocurrency-axie-infinity-polynetwork-2022-3",
               "urlToImage": "https://i.insider.com/624344d94317320019c7c491?width=1200&format=jpeg",
               "publishedAt": "2022-03-30T04:13:29Z",
               "content": "A crypto hacker targeted Axie Infinity's Ronin Network and made away with $625 million worth of ether and stablecoin USDC. \r\nThe Ronin Network published a blog post Tuesday explaining how its network… [+993 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "Fox Business"
               },
               "author": "Ken Martin",
               "title": "Ronin hit by $615M crypto heist - Fox Business",
               "description": "Bitcoin was trading around $47,000 on Wednesday, paring gains after reaching a 3-month high.",
               "url": "https://www.foxbusiness.com/markets/bitcoin-3-30-2022",
               "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/04/0/0/Ethereum-coin.jpg?ve=1&tl=1",
               "publishedAt": "2022-03-30T03:51:33Z",
               "content": "Bitcoin was trading around $47,000 Wednesday, paring gains after reaching a 3-month high.\r\nThe cryptocurrency snapped a 5-day winning streak on Tuesday.\r\nGET FOX BUSINESS ON THE GO BY CLICKING HERE\r\n… [+1340 chars]"
          },
          {
               "source": {
                    "id": "the-verge",
                    "name": "The Verge"
               },
               "author": "Jay Peters",
               "title": "Judge approves Activision Blizzard's $18 million harassment settlement with the EEOC - The Verge",
               "description": "A judge has approved Activision Blizzard’s $18 million settlement with the US Equal Employment Opportunity Commission (EEOC). The two organizations had announced the settlement in September.",
               "url": "https://www.theverge.com/2022/3/29/23001663/activision-blizzard-18-million-harassment-settlement-eeoc-dfeh",
               "urlToImage": "https://cdn.vox-cdn.com/thumbor/YRiPpHykzauPDmn-AEHksud-5rg=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22749475/acastro_210729_1777_blizzard_0001.jpg",
               "publishedAt": "2022-03-30T03:20:46Z",
               "content": "The companys settlement with the US Equal Employment Opportunity Commission has been approved\r\nIllustration by Alex Castro / The Verge\r\nA judge has approved Activision Blizzards $18 million settlemen… [+2225 chars]"
          },
          {
               "source": {
                    "id": "the-wall-street-journal",
                    "name": "The Wall Street Journal"
               },
               "author": "Keith Zhai and Liza Lin",
               "title": "China Plans New Restrictions in Its Booming Live-Streaming Sector - The Wall Street Journal",
               "description": "Regulators are planning rules limiting virtual tipping of live-streaming hosts and time spent by young people on the apps.",
               "url": "https://www.wsj.com/articles/china-plans-new-restrictions-in-its-booming-live-streaming-sector-11648603781",
               "urlToImage": "https://images.wsj.net/im-514661/social",
               "publishedAt": "2022-03-30T01:29:00Z",
               "content": "SINGAPOREChina is planning new curbs on the countrys $30 billion live-streaming industry, according to people familiar with the matter, renewing a regulatory campaign aimed at reining in technology c… [+427 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "BBC News"
               },
               "author": "https://www.facebook.com/bbcnews",
               "title": "Climate change: Wind and solar reach milestone as demand surges - BBC.com",
               "description": "Wind turbines and solar panels produced 10% of global electricity in 2021 but coal also had a resurgence.",
               "url": "https://www.bbc.com/news/science-environment-60917445",
               "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17D9D/production/_123939679_gettyimages-1239453130.jpg",
               "publishedAt": "2022-03-30T00:20:09Z",
               "content": "By Matt McGrathEnvironment correspondent\r\nImage source, Getty Images\r\nImage caption, Wind and solar installations grew at pace in 2021\r\nWind and solar generated 10% of global electricity for the firs… [+4180 chars]"
          },
          {
               "source": {
                    "id": "reuters",
                    "name": "Reuters"
               },
               "author": null,
               "title": "Facebook advertisers can pursue class action over ad rates - Reuters",
               "description": "A U.S. judge ruled on Tuesday that a lawsuit accusing Meta Platforms Inc's <a href=\"https://www.reuters.com/companies/FB.O\" target=\"_blank\">(FB.O)</a> Facebook of deceiving advertisers about its \"potential reach\" tool can proceed as a class action.",
               "url": "https://www.reuters.com/business/facebook-advertisers-can-pursue-class-action-over-ad-rates-2022-03-29/",
               "urlToImage": "https://www.reuters.com/resizer/mbhZSzzShHxANYiMfmzWrZKa8KY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EWBMKRBNO5JYVMLQSJN4MJ6PFE.jpg",
               "publishedAt": "2022-03-30T00:09:00Z",
               "content": "March 29 (Reuters) - A U.S. judge ruled on Tuesday that a lawsuit accusing Meta Platforms Inc's (FB.O) Facebook of deceiving advertisers about its \"potential reach\" tool can proceed as a class action… [+1548 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "CNBC"
               },
               "author": "Eustance Huang",
               "title": "China stocks lead gains in Asia; shares of Evergrande's electric car unit plunge more than 10% - CNBC",
               "description": "Hong Kong-listed shares of China Evergrande Group's electric vehicle unit returned to trade on Wednesday.",
               "url": "https://www.cnbc.com/2022/03/30/asia-markets-us-treasurys-china-evergrande-group-currencies-oil.html",
               "urlToImage": "https://image.cnbcfm.com/api/v1/image/107007807-1643337444460-gettyimages-1267455437-vcg111295937601.jpeg?v=1648614132&w=1920&h=1080",
               "publishedAt": "2022-03-29T23:58:01Z",
               "content": "SINGAPORE Shares in Asia-Pacific were largely higher on Wednesday, as mainland Chinese stocks led gains regionally.\r\nMainland China's Shanghai composite climbed 1.96% on the day to 3,266.60 while the… [+3181 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "CNBC"
               },
               "author": "Krystal Hur",
               "title": "FedEx CEO says the company will make ‘an enormous effort’ toward AV trucks in June - CNBC",
               "description": "\"You'll see in late June an enormous effort toward autonomous trucks that move over the highway,\" the FedEx CEO said.",
               "url": "https://www.cnbc.com/2022/03/29/fedex-ceo-says-the-company-will-make-an-enormous-effort-towards-av-trucks-in-june.html",
               "urlToImage": "https://image.cnbcfm.com/api/v1/image/106981714-1638211258670-gettyimages-1236890208-CYBER_MONDAY.jpeg?v=1639756907&w=1920&h=1080",
               "publishedAt": "2022-03-29T23:55:34Z",
               "content": "FedEx chief executive Fred Smith told CNBC's Jim Cramer on Tuesday that the company will make big strides in its autonomous vehicle efforts this summer.\r\n\"You'll see in late June an enormous effort t… [+1458 chars]"
          },
          {
               "source": {
                    "id": null,
                    "name": "Seeking Alpha"
               },
               "author": "Carl Surran",
               "title": "Top oil execs refuse House committee request to testify on high prices - Seeking Alpha",
               "description": "CEOs from some U.S. oil companies with the most production on federal lands and waters have refused a request to testify at a congressional hearing next week to probe surging energy...",
               "url": "https://seekingalpha.com/news/3818693-top-oil-execs-refuse-house-committee-request-to-testify-on-high-prices",
               "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/859021152/image_859021152.jpg?io=getty-c-w750",
               "publishedAt": "2022-03-29T23:52:00Z",
               "content": "ssuaphoto/iStock via Getty Images\r\nCEOs from some U.S. oil companies with the most production on federal lands and waters have refused a request to testify at a congressional hearing next week to pro… [+1220 chars]"
          }
     ]

     constructor() {
          super();
          console.log("constructor");
          this.state = {
               articles: this.articles,
               loading: false
          }

     }


     render() {
          return (
               <>
                    <div className="container my-3">
                         <div className="row" >
                              {this.state.articles.map((element) => {
                                   return <div className="col-md-4" key={element.url}>

                                        <Newsitems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}
                                        />
                                   </div>
                              })}
                         </div>
                    </div>
               </>
          )
     }
}
