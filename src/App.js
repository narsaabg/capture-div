import react from "react";
import {Route , Switch} from 'react-router-dom'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Error from "./components/Error";

const App = ()=>{
  return(
    <div>
      
     <Header key={1}/>
     <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error}/>
      </Switch>
     <Footer key={3}/>
    </div>
  )
}

export default App;
