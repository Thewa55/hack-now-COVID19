import axios from "axios"

const newsapi = process.env.REACT_APP_NEWS_API
const googleMapApi= process.env.REACT_APP_GOOGLE_MAP_KEY

export default {
  getCurrentCovid: function(){
    return axios.get("https://covidtracking.com/api/states")
  },
  getCurrentUS: function(){
    return axios.get("http://covidtracking.com/api/us")
  },
 

  getTopHeadlines: function(){
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&q=coronavirus&apiKey=${newsapi}&pageSize=100`)
  },
  // https://newsapi.org/v2/everything?q=COVID&from=2020-04-23&sortBy=publishedAt&apiKey=${newsapi}&pageSize=100

  getStateRes: function(){
    return axios.get('https://covidtracking.com/api/states/info')
  },

  getMap: function(){
    return axios.get(`https://maps.googleapis.com/maps/api/js?key=${googleMapApi}&callback=initMap`)
  },

  createMember: function(member){
    return axios.post("api/members", member)
  },

  getMember: function(){
    return axios.get("api/members")
  },

  getRequests: function(){
    return axios.get("api/request")
  }
}