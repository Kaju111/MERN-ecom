import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Error from "../layout/Error/Error";
import MetaData from "../layout/MetaData";

function valuetext(value) {
  return `${value}°C`;
}

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = () => {
  const dispatch = useDispatch();
  const { keyword } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings]);

  return (
    <Fragment>
      {error ? (
        <Error />
      ) : (
        <Fragment>
          {loading ? (
            <loading />
          ) : (
            <Fragment>
              <MetaData title="PRODUCTS -- ECOMMERCE" />

              <h2 className="productsHeading">Products</h2>

              <div className="products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>

              <div className="filterBox">
                <div>Price</div>
                <Box>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={price}
                    onChange={priceHandler}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={25000}
                  />
                </Box>

                <div>CateGories</div>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>

                <fieldset>
                  <div component="legend">Ratings Above</div>
                  <Slider
                    value={ratings}
                    onChange={(e, newRating) => {
                      setRatings(newRating);
                    }}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={5}
                  />
                </fieldset>
              </div>

              {resultPerPage < productsCount && (
                <div className="paginationBox">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
