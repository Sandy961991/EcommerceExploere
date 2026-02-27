import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { useDebounce } from "../hooks/useDebounce";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { products, loading, error } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category") || "all";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categoryFromURL);
  const [page, setPage] = useState(1);

  const debouncedSearch = useDebounce(search, 500);
  const itemsPerPage = 6;

  useEffect(() => {
    setCategory(categoryFromURL);
    setPage(1);
  }, [categoryFromURL]);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, debouncedSearch, category]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading amazing products...</p>
      </div>
    );

  if (error)
    return (
      <div className="alert alert-danger text-center mt-5">
        {error}
      </div>
    );

  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Explore Our Products</h2>
        <p className="text-muted">
          Discover the best items at unbeatable prices
        </p>
      </div>

      {/* Search + Filter */}
      <div className="card shadow-sm p-3 mb-4">
        <div className="row align-items-center">

          {/* Search */}
          <div className="col-md-6 mb-2">
            <div className="input-group">
              <span className="input-group-text bg-white">
                🔍
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div className="col-md-4 mb-2">
            <select
              className="form-select"
              value={category}
              onChange={(e) => {
                const selected = e.target.value;
                setCategory(selected);
                setPage(1);

                if (selected === "all") {
                  setSearchParams({});
                } else {
                  setSearchParams({ category: selected });
                }
              }}
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="col-md-2 text-end">
            <span className="badge bg-primary">
              {filteredProducts.length} Items
            </span>
          </div>

        </div>
      </div>

      {/* Products Grid */}
      <div className="row">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="h-100 shadow-sm">
                <ProductCard product={product} />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-4">
            <h5>No products found 😔</h5>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">

              <li className={`page-item ${page === 1 && "disabled"}`}>
                <button
                  className="page-link"
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </button>
              </li>

              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${page === i + 1 && "active"}`}
                >
                  <button
                    className="page-link"
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  page === totalPages && "disabled"
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              </li>

            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Products;