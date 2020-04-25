import axios from "axios"

const newsapi = process.env.REACT_APP_NEWS_API
const googleMapApi= process.env.REACT_APP_GOOGLE_MAP_KEY

export default {
  getCurrentCovid: function(){
    return axios.get("https://covidtracking.com/api/states")
  },

  getTopHeadlines: function(){
    return axios.get(`https://newsapi.org/v2/everything?q=COVID&from=2020-04-20&sortBy=publishedAt&apiKey=${newsapi}&pageSize=100`)
  },

  getMap: function(){
    return axios.get(`https://maps.googleapis.com/maps/api/js?key=${googleMapApi}&callback=initMap`)

  }
}