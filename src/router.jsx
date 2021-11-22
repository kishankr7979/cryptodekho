import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from './components/homePage';
import About from './components/aboutPage'
import Bitcoin from './components/cryptoComponents/bitcoin'
import WrappedBitcoin from './components/cryptoComponents/wrapped-bitcoin'
const router = () => {
    return (
        <div>
             <BrowserRouter>
       <NavBar />
       <div className="App">
        <Switch>
          <Route exact path="/" exact component = {()=> <Home/>} />
          <Route path="/about" component={About} />
          <Route path="/BTC" component={Bitcoin} />
          <Route path="/WBTC" component={WrappedBitcoin} />
        </Switch>
     </div>
    </BrowserRouter>
        </div>
    )
}

export default router
