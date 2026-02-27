import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 border-0 shadow-sm product-card">
      
      {/* Category Badge */}
      <div className="position-absolute m-2">
        <span className="badge bg-dark text-uppercase">
          {product.category}
        </span>
      </div>

      {/* Product Image */}
      <div className="text-center p-3" style={{ height: "220px" }}>
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid product-img"
          style={{ maxHeight: "180px", objectFit: "contain" }}
        />
      </div>

      {/* Card Body */}
      <div className="card-body d-flex flex-column">
        
        {/* Title */}
        <h6 className="fw-bold text-truncate">
          {product.title}
        </h6>

        {/* Rating */}
        <div className="mb-2">
          <span className="text-warning">
            {"★".repeat(Math.round(product.rating?.rate || 4))}
          </span>
          <span className="text-muted ms-2 small">
            ({product.rating?.count || 0})
          </span>
        </div>

        {/* Price */}
        <h5 className="text-success fw-bold mb-3">
          ${product.price}
        </h5>

        {/* Buttons */}
        <div className="mt-auto">
          <Link
            to={`/products/${product.id}`}
            className="btn btn-outline-primary btn-sm w-100 mb-2"
          >
            View Details
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary btn-sm w-100"
          >
            🛒 Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;