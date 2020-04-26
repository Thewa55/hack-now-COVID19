import React, { useState, useEffect, Fragment } from 'react';
import API from "../../utils/API";
import StateMenu from '../../components/StateMenu';
import {Container} from 'semantic-ui-react'
import { useStoreContext } from '../../utils/GlobalState'

function LandingPage() {

  const [states, setStates] = useState([])
  const [headlines, setHeadlines] = useState([])
  const [totalUS, setTotalUS] = useState([])
  const [stateRes, setStateRes] = useState([])
  const [coords, setCoords] = useState({ lat: 0, lng: 0 })
  const [state,dispatch] = useStoreContext()

  function getStates() {
    API.getCurrentCovid()
      .then(res => {
        setStates(res.data)
      })
  }

  function getTotalUS() {
    API.getCurrentUS().then(res => {
      setTotalUS(res.data)
    })
  }

  function position() {
    navigator.geolocation.getCurrentPosition(
      position => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      err => console.log(err)
    );
  }

  function getHeadlines() {
    API.getTopHeadlines()
      .then(res => {
        setHeadlines(res.data)
      })
  }
  
  function getStateResources() {
    API.getStateRes().then(res => {
      setStateRes(res.data)
    })
  }


  useEffect(() => {
    position()
    getStates()
    getHeadlines()
    getTotalUS()
    getStateResources()
  }, [state])

  return (
    <Container>
    <div>
      <iframe style={{ width: "100%", height: "500px", overflow: "hidden" }} src="https://www.arcgis.com/apps/opsdashboard/index.html#/409af567637846e3b5d4182fcd779bea" width="100" height="100" scrolling="no">Iframes not supported</iframe>
      <div>Maps provided by Johns Hopkins University</div>
      {/* <div className="Map">
        <MapContainer coords={coords} />
      </div> */}
      <StateMenu state={states} total={totalUS} res={stateRes} news={headlines}/>
      {/* <h3>World Map</h3>
      <iframe width="650" height="400" frameborder="0" scrolling="no"
        marginheight="0" marginwidth="0" title="2019-nCoV"
        src="//arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c&extent=77.3846,11.535,163.5174,52.8632&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"
      ></iframe> */}
    </div>
    </Container>
  )
}

export default LandingPage