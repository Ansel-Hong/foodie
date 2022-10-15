import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './List.jsx'
import databaseInfo from './ExampleData.json'

function App() {
  const [receipes, setReceipes] = useState([{id: databaseInfo.id, name: databaseInfo.name, urlPic: databaseInfo.linkToPic, urlVid: databaseInfo.linkToVid}])

  return (
    <>
      <List receipes = {receipes}/>

    </>
  )
}

export default App
