import { useState } from 'react'
import { Route, Switch } from "react-router-dom";

import './App.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import Layout from "./components/layout/Layout";
import FridgeList from './components/pages/FridgeList';
import VideoPlayer from './components/pages/VideoPlayer';
import Bookmark from './components/pages/Bookmark';
import Cart from './components/pages/Cart';

import FoodMeter from './components/layout/FoodMeter';

function App() {
  const [percentage, setPercentage] = useState(60)

  const fridgePerc = (fPerc) => {
    setPercentage(fPerc);
  }

  return (
    <div className="App">
      <FoodMeter percentage={percentage} />

      <Layout>
        <Switch>
          <Route path="/" exact={true}>
            <VideoPlayer />
          </Route>
          <Route path="/fridge" exact={true}>
            <FridgeList setPercentage={fridgePerc} />
          </Route>
          <Route path="/bookmark" exact={true}>
            <Bookmark />
          </Route>
          <Route path="/cart" exact={true}>
            <Cart />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
