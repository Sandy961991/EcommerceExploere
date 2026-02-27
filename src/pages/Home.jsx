import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="text-white text-center d-flex align-items-center"
        style={{
          height: "90vh",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold">
            Discover Amazing Products
          </h1>
          <p className="lead mt-3">
            Shop the latest trends at unbeatable prices.
          </p>

          <div className="mt-4">
            <Link to="/products" className="btn btn-light btn-lg me-3">
              Shop Now
            </Link>
            <Link to="/cart" className="btn btn-outline-light btn-lg">
              View Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Shop by Category</h2>

        <div className="row text-center">

          {/* Electronics */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 category-card">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80"
                className="card-img-top"
                alt="Electronics"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>Electronics</h5>
                <p>Latest gadgets & devices</p>
                <Link
                  to="/products?category=electronics"
                  className="btn btn-primary btn-sm"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Jewelry */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 category-card">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338"
                className="card-img-top"
                alt="Jewelry"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>Jewelry</h5>
                <p>Elegant & premium collection</p>
                <Link
                  to="/products?category=jewelery"
                  className="btn btn-primary btn-sm"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Men's Clothing */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 category-card">
              <img
                src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=500"
                className="card-img-top"
                alt="Men Clothing"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>Men's Clothing</h5>
                <p>Trendy & comfortable styles</p>
                <Link
                  to="/products?category=men's clothing"
                  className="btn btn-primary btn-sm"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Women's Clothing */}
          <div className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 category-card">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
                className="card-img-top"
                alt="Women Clothing"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>Women's Clothing</h5>
                <p>Fashion that inspires</p>
                <Link
                  to="/products?category=women's clothing"
                  className="btn btn-primary btn-sm"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-light mt-5 py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>

          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <div className="p-3">
                <h5>🚚 Fast Delivery</h5>
                <p>Quick and reliable shipping service.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="p-3">
                <h5>💳 Secure Payment</h5>
                <p>100% safe and secure payment methods.</p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="p-3">
                <h5>⭐ Premium Quality</h5>
                <p>Top-rated products from trusted brands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center py-5 bg-dark text-white">
        <h3>Start Shopping Today!</h3>
        <Link to="/products" className="btn btn-warning mt-3">
          Browse Products
        </Link>
      </div>
    </>
  );
};

export default Home;