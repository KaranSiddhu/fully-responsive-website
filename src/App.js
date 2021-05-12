import './App.css';
import NavBar from './components/mynavbar/NavBar';
import { Switch, Route } from "react-router-dom";
import Home from './components/pages/home page/Home';
import Footer from './components/pages/Footer/Footer';
import DefaultRoute from './components/pages/default route/DefaultRoute';
function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" component={DefaultRoute} />
        <Route path="/products" component={DefaultRoute} />
        <Route path="/sign-up" component={DefaultRoute} />
      </Switch>
      
      <Footer />

    </div>
  );
}

export default App;
