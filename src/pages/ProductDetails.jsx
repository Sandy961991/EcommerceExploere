import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load product");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading product details...</p>
      </div>
    );

  if (error)
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">{error}</div>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="card border-0 shadow-lg p-4">
        <div className="row align-items-center">

          {/* Product Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className="p-4 bg-light rounded">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid product-detail-img"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="col-md-6">

            {/* Category */}
            <span className="badge bg-dark text-uppercase mb-2">
              {product.category}
            </span>

            {/* Title */}
            <h3 className="fw-bold">{product.title}</h3>

            {/* Rating */}
            <div className="mb-2">
              <span className="text-warning fs-5">
                {"★".repeat(Math.round(product.rating?.rate || 4))}
              </span>
              <span className="text-muted ms-2">
                ({product.rating?.count || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <h2 className="text-success fw-bold mb-3">
              ${product.price}
            </h2>

            {/* Description */}
            <p className="text-muted">
              {product.description}
            </p>

            {/* Stock Badge */}
            <div className="mb-3">
              <span className="badge bg-success">
                In Stock
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="d-flex align-items-center mb-3">
              <label className="me-3 fw-semibold">Quantity:</label>

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>

              <input
                type="number"
                className="form-control mx-2 text-center"
                style={{ width: "70px" }}
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />

              <button
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="btn btn-primary btn-lg w-100"
              onClick={() =>
                addToCart({ ...product, quantity })
              }
            >
              🛒 Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;