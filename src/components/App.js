
import React, { useRef, useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  let id = useRef(0);
  const[cartItems, setCartItems] = useState([
    {
      id:id.current++,
      item:"Item 1",
      price:"$10",
    },
    {
      id:id.current++,
      item:"Item 2",
      price:"$20",
    },
    {
      id:id.current++,
      item:"Item 3",
      price:"$30",
    }
  ]);
  const[item, setItem] = useState("");
  const[price, setPrice] = useState("");


  function handleRemove(id){
    let newCart = cartItems.filter(c=>c.id!==id);
    setCartItems(newCart);
  }

  function handleCart(a,b){
    let newcart = [...cartItems,{id:id.current++,item:a.trim(),price:`$${b}`}];
    setCartItems(newcart);
  }
  return (
    <div className="parent">
      <h1>Parent Component</h1>
        <label htmlFor="itemName">
          Item Name:
          <input id="itemName" type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
        </label>
        <label htmlFor="itemPrice">
          Item Price:
          <input id="itemPrice" type="number" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </label>
        <button onClick={()=>handleCart(item,price)}>Add Item</button>

        <Child list={cartItems} onclick={handleRemove}/>
    </div>
  )
}

export default App
