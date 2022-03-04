import './App.css';
import LandingPage from './landingPage/landingPage.js'
import { Switch, Route } from 'react-router-dom'
import ProductPage from './productPage/productPage';
import Orders from './orders/orders'
 
function App() {
  return (

    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path={'/products'} exact component={ProductPage}/>
      <Route path={'/orders'} exact component={Orders}/>
    </Switch>

  );
}

export default App;
