import axios from "axios"

export default {
  getCurrentCovid: function(){
    return axios.get("https://covidtracking.com/api/states")
  }


}   