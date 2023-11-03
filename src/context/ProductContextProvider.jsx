import React from "react";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductContext";

const ProductContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(data);
  const [loading, setLoading] = useState(true);

  // Pagination
  const totalPost = filterData.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filterData.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8403dea648msh56c3c3bddee3a4fp1c8b12jsne84ab4487a20",
      "X-RapidAPI-Host": "aliexpress-datahub.p.rapidapi.com",
    },
  };
  const fetchData = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  return (
    <ProductContext.Provider
      value={{
        data,
        filterData,
        setFilterData,
        loading,currentPosts,
        postPerPage,
        totalPost,
        paginate,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
