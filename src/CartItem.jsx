import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onNavigate }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const cost = parseFloat(item.cost.replace('$', ''));
      return total + cost * item.quantity;
    }, 0).toFixed(2);
  };

  // Calculate total cost for a single item
  const calculateItemTotal = (item) => {
    const cost = parseFloat(item.cost.replace('$', ''));
    return (cost * item.quantity).toFixed(2);
  };

  // Handle increment quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrement quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Handle delete item
  const handleDelete = (itemName) => {
    dispatch(removeItem(itemName));
  };

  // Handle checkout
  const handleCheckout = () => {
    alert('Coming Soon! Our checkout feature is under development.');
  };

  // Handle continue shopping
  const handleContinueShopping = () => {
    onNavigate('products');
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h3 onClick={() => onNavigate('landing')} style={{ cursor: 'pointer' }}>
          🌿 Paradise Nursery
        </h3>
        <div className="navbar-links">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('products'); }}>Plants</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('cart'); }} className="cart-icon">
            🛒
            {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>}
          </a>
        </div>
      </div>

      {/* Cart Content */}
      <div className="cart-page">
        <h1>🛒 Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty!</p>
            <button
              className="continue-shopping-btn"
              style={{ marginTop: '20px', padding: '12px 30px', fontSize: '16px', border: '2px solid #4caf50', borderRadius: '8px', cursor: 'pointer', background: '#fff', color: '#4caf50', fontWeight: 'bold' }}
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: {item.cost}</p>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-cost">
                  ${calculateItemTotal(item)}
                </div>
                <button className="cart-item-delete" onClick={() => handleDelete(item.name)}>
                  Delete
                </button>
              </div>
            ))}

            {/* Total Amount */}
            <div className="cart-total">
              Total Cart Amount: ${calculateTotalAmount()}
            </div>

            {/* Buttons */}
            <div className="cart-buttons">
              <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
