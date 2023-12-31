import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./ProductCard";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import Error from "../layout/Error/Error";
import { CLEAR_ERRORS } from "../../constants/productConstants";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      dispatch(CLEAR_ERRORS());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      {error ? (
        <Error />
      ) : (
        <Fragment>
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <MetaData title="ECOMMERCE" />
              <div className="banner">
                <p>Welcome to Ecommerce</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <a href="#container">
                  <button>
                    Scroll <CgMouse />
                  </button>
                </a>
              </div>
              <h2 className="homeHeading">Featured Products</h2>
              <div className="container" id="container">
                {products &&
                  products.map((product) => <Product product={product} />)}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
