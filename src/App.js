import Auth from './components/Auth'
import NavBar from './components/NavBar'
import { useState } from 'react'


function App() {
  const [showProfile, setShowProfile] = useState(false)

  function profileClickHandler () {
    setShowProfile(showProfile => !showProfile)
  }

  function homeButtonClickHandler () {
    setShowProfile(showProfile => showProfile = false)
  }

  if(showProfile){
    return(
      <div className="w-screen h-screen">
      <NavBar showLogin={showProfile} profileClickHandler={profileClickHandler} homeButtonClickHandler={homeButtonClickHandler}/>
      <div className="flex justify-center">
        <Auth/>
      </div>
    </div>
    )
  }
  else{
    return (
      <div className="w-screen h-screen">
        <NavBar shoeLogin={showProfile} profileClickHandler={profileClickHandler} homeButtonClickHandler={homeButtonClickHandler}/>
        <div className="flex justify-center">
        </div>
      </div>
    )
  }
}

export default App
