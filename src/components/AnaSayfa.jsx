import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './AnaSayfa.css';
export default function AnaSayfa(){
  let history=useHistory()

  function handleOrder(){
    history.push('/pizza-order')
  }
    return (
        <div className="home-container">
          <header className="home-header">
          <h1>Mert Ustanın Pizza Fabrikası</h1>
          <h2>Acken sen sen değilsin</h2>
        <button onClick={handleOrder} className="order-button">Doymaya bir tık ötedesin</button>
      </header>
    </div>
    )
}