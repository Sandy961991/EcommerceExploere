import { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Full Name"
          required
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          required
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          className="form-control mb-3"
          placeholder="Address"
          required
          onChange={(e) =>
            setForm({ ...form, address: e.target.value })
          }
        />

        <button className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;