import { Button } from 'bootstrap';
import './PizzaOrder.css'
import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function PizzaOrder() {
  const [size, setSize] = useState('');
  const [crust, setCrust] = useState(''); 
  const [toppings, setToppings] = useState([]);
  const [orderNote, setOrderNote] = useState('');

  
  const pizzaSizes = [
    { label: 'Küçük', value: 'small', },
    { label: 'Orta', value: 'medium', },
    { label: 'Büyük', value: 'large', },
  ];

  
  const crustTypes = [
    { label: 'İnce' },
    { label: 'Kalın' },
  ];

  
  const availableToppings = [
    { label: 'Pepperoni', value: 'pepperoni', price: 5 },
    { label: 'Domates', value: 'domates', price: 5 },
    { label: 'Biber', value: 'biber', price: 5 },
    { label: 'Sucuk', value: 'sucuk', price: 5 },
    { label: 'Tavuk', value: 'tavuk', price: 5 },
    { label: 'Soğan', value: 'soğan', price: 5 },
    { label: 'Ananas', value: 'ananas', price: 5 },
    { label: 'Sarımsak', value: 'sarımsak', price: 5 },
    { label: 'Mısır', value: 'Mısır', price: 5 },
    { label: 'Pastırma', value: 'Pastırma', price: 5 },
    
  ];

  
  const calculateTotalPrice = useMemo(() => {
    let totalPrice = 120;

    toppings.forEach((topping) => {
      totalPrice += availableToppings.find((item) => item.value === topping)?.price || 0;
    });
    return totalPrice;
  }, [toppings]);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleCrustChange = (event) => {
    setCrust(event.target.value);
  };

  const handleToppingChange = (event) => {
    const toppingValue = event.target.value;
    const isChecked = event.target.checked;
    setToppings((selectedToppings) => {
      if (isChecked) {
        return [...selectedToppings, toppingValue];
      } else {
        return selectedToppings.filter((item) => item !== toppingValue);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleOrderNoteChange = (event) => {
    setOrderNote(event.target.value);
  }
  let history=useHistory()

  
  function handleOrderer(){
    history.push('/order-summary')
  }
  return (
    <form onSubmit={handleSubmit}>
    <div className='header-section'>
      <h1 >Mert Ustanın Pizza Fabrikası</h1>
    </div> 
      <p>Karışık valla karışık pizza tercihiniz için teşekkür ederiz, İtalyan mutfak kültürünün en meşhur yemeklerinden biri olan pizza, dünya çapında popülerdir ve pek çok farklı çeşidi bulunmaktadır. 
        Pizzanın kökeni, İtalya'nın Napoli şehrine dayanır ve geleneksel Napoli pizzaları, belirli kalite standartlarına ve yapım yöntemlerine sahiptir, ustamız napoliden geldi.
      </p>
    <div className="size-options">
        <h3>Boyut Seç:</h3>
            {pizzaSizes.map((sizeOption) => (
        <label key={sizeOption.value}>
            <input
            type="radio"
            value={sizeOption.value}
            onChange={handleSizeChange}
        checked={size === sizeOption.value}
        
    />
        {sizeOption.label}
        
    </label>
    
    ))}
    </div>
    <div className='pastry-options'>        
      <label>
        <h3>Hamur Seç:</h3>
        <select value={crust} onChange={handleCrustChange}>
          {crustTypes.map((crustOption) => (
            <option key={crustOption.value} value={crustOption.value}>
              {crustOption.label}
            </option>
          ))}
        </select>
      </label>
      </div>  
        
      <fieldset className='additional-material'>
        <legend>Ek Malzemeler</legend>
        <p>En az 4 malzeme, en fazla da 8 malzeme seçebilirsiniz</p>
        {availableToppings.map((topping) => (
          <label key={topping.value}>
            <input
              type="checkbox"
              name="toppings"
              value={topping.value}
              onChange={handleToppingChange}
              checked={toppings.includes(topping.value)}
            />
            {topping.label} 
          </label>
        ))}
      </fieldset>
      <div className='order-note'>
        <label>
          Sipariş Notu:
          <textarea
            value={orderNote}
            onChange={handleOrderNoteChange}
            placeholder="Sipariş ile ilgili notunuz var mı?"
          />
        </label>
      </div>
      <p className='total-price'>Sipariş Toplamı: {calculateTotalPrice} TL</p>
      <div>
            <button
            onClick={handleOrderer} className='button-group' type="submit"
            >
            Sipariş ver
            </button>
    </div>
    </form>

  );
}


    