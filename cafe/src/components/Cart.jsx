import React, { useState } from 'react';
import './Cart.css'; // <-- THIS LINE IS THE FIX

function Cart({ cartItems, removeFromCart, clearCart }) {
  const [tableNumber, setTableNumber] = useState('');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const totalPrice = cartItems.reduce((price, item) => price + item.price, 0);

  const handlePlaceOrder = () => {
    if (tableNumber.trim() === '') {
      alert('Please enter your table number.');
      return;
    }
    console.log(`Order placed for table: ${tableNumber}`);
    setIsOrderPlaced(true);
    clearCart();
  };

  if (isOrderPlaced) {
    return (
      <div className="cart-container order-success">
        <h2>Thank You!</h2>
        <p>Your order for table #{tableNumber} has been placed.</p>
        <p>It will be ready in approximately 20 minutes.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.cartItemId} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price.toFixed(2)}</p>
              </div>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <div className="checkout-form">
              <label htmlFor="table">Enter Table Number:</label>
              <input
                type="text"
                id="table"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="e.g., 5"
              />
              <button className="cart-checkout-btn" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;