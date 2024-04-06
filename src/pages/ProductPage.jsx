import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductPage = () => {
  const { productid } = useParams();
  const {
    data: product,
    error,
    loading,
  } = useFetch("https://fakestoreapi.com/products/" + productid);

  return (
    <>
      <h1>Product Page</h1>
      <h2>Product ID: {productid}</h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {product && (
        <>
          <h2>{product.title}</h2>
          <img src={product.image} className="temp-size" />
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div className="div">Price: {product.price}</div>
        </>
      )}
    </>
  );
};

export default ProductPage;
