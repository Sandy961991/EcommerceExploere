import { useCart } from "../context/CartContext";
import { useCartTotal } from "../hooks/useCartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = useCartTotal();

  if (cart.length === 0)
    return (
      <div className="container mt-5 text-center">
        <div className="card shadow p-5">
          <h2 className="mb-3">🛒 Your Cart is Empty</h2>
          <p className="text-muted">
            Looks like you haven't added anything yet.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg mt-3">
            Continue Shopping
          </Link>
        </div>
      </div>
    );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛍️ Shopping Cart</h2>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3 shadow-sm">
              <div className="row g-0 align-items-center p-3">
                
                {/* Product Image */}
                <div className="col-md-3 text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{ height: "120px", objectFit: "contain" }}
                  />
                </div>

                {/* Product Info */}
                <div className="col-md-4">
                  <h6 className="fw-bold">{item.title}</h6>
                  <p className="text-muted mb-1">
                    Price: ${item.price}
                  </p>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="col-md-3">
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    <input
                      type="number"
                      min="1"
                      className="form-control mx-2 text-center"
                      style={{ width: "60px" }}
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />

                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Item Total */}
                <div className="col-md-2 text-end">
                  <h6 className="fw-bold text-success">
                    ${(item.price * item.quantity)}
                  </h6>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card shadow p-4">
            <h5 className="mb-3">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span className="text-success">Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <Link to="/checkout" className="btn btn-success w-100">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;