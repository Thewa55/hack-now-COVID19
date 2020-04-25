import axios from "axios"

const newsapi = process.env.REACT_APP_NEWS_API

export default {
  getCurrentCovid: function(){
    return axios.get("https://covidtracking.com/api/states")
  },
  
  getTopHeadlines: function(){
    return axios.get(`https://newsapi.org/v2/everything?q=COVID&from=2020-04-20&sortBy=publishedAt&apiKey=${newsapi}&pageSize=100`)
  }
} 