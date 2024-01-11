import './App.css'
import {Switch,Route} from "react-router-dom"
import AnaSayfa from './components/AnaSayfa'
import PizzaOrder from './components/PizzaOrder'
import OrderSummary from './components/OrderSummary'

function App() {

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <AnaSayfa/>
        </Route>
        <Route path='/pizza-order' exact>
          <PizzaOrder/>
        </Route>
        <Route path='/order-summary' exact>
        <OrderSummary/>
        </Route>
      </Switch>
    </>
  )
}

export default App
