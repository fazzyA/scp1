import React, {useContext} from 'react';
import {CartContext} from './CartContext';
 const CartItem = () => {
  const [cart, setCart] = useContext(CartContext);
  
  const delItem = (id) =>{
    let newCart=cart.filter((item)=>item.id!=id);
    console.log(newCart)
    setCart([...newCart])
    } //
  return (
    <div className='cart-box'>
      <h3>Your Items</h3>
      <table>
          <tbody>
      {cart.map((item,index)=>{
          return (
          <tr key={item.id}>
              <td>items in cart : {item.name}</td>
              <td><button onClick={()=>{delItem(item.id)}}>x</button></td>
              </tr>)
      })
      }
                      {/* <button key={item.id} onClick={delItem(item.id)}>X</button> */}

                      </tbody></table>
    </div>
  )
}
export default CartItem;