import axios from "axios"

export default {
  getCurrentCovid: function(){
    return axios.get("https://covidtracking.com/api/states")
  },

  getTopHeadlines: function(){
    return axios.get("https://newsapi.org/v2/everything?q=COVID&from=2020-03-16&sortBy=publishedAt&apiKey=&pageSize=100&page=2")
  }
} 