import './App.css';
import LandingPage from './landingPage/landingPage.js'
import { Switch, Route } from 'react-router-dom'
import ProductPage from './productPage/productPage';
 
function App() {
  return (

    <Switch>
      <Route path={'/'} component={ LandingPage }/>
      <Route path={'/products'} component={ ProductPage }/>
    </Switch>

  );
}

export default App;
