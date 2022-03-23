import './App.css';
import LandingPage from './landingPage/landingPage.js'
import { Switch, Route } from 'react-router-dom'
import ProductPage from './productPage/productPage';
import Orders from './orders/orders'
import Basket from './basket/basket';
import SearchPage from './search/searchPage';
import Login from './login/login'
import Register from './login/register';
import Payments from './Payments/payment';
 
function App() {
  return (

    <Switch>
      <Route path='/' exact component={LandingPage}/>
      <Route path={'/products'} exact component={ProductPage}/>
      <Route path={'/orders'} exact component={Orders}/>
      <Route path={'/basket'} exact component={Basket} />
      <Route path={'/search'} exact component={SearchPage} />
      <Route path={'/login'} exact component={Login} />
      <Route path={'/register'} exact component={Register}/>
      <Route path={'/payments'} exact component={Payments}/>
    </Switch>

  );
}

export default App;
