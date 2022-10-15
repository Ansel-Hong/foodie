import { useState } from 'react'
import { Route, Switch } from "react-router-dom";
import './App.css'

import Layout from "./components/layout/Layout";
import FridgeList from './components/pages/FridgeList';
import VideoPlayer from './components/pages/VideoPlayer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <VideoPlayer />
          </Route>
          <Route path="/fridge" exact={true}>
            <FridgeList />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
