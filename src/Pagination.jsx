import React, { useContext } from "react";
import ProductContext from "./context/ProductContext";
import {
  PaginationDiv,
  PaginationDivContainer,
  PaginationMainContainer,
  PaginationSubContainer,
} from "./styles/Pagination.style";
const Pagination = () => {
  const { postPerPage, totalPost, paginate, currentPage, setCurrentPage } =
    useContext(ProductContext);
  const pageNumber = [];
  const nextPage = () => {
    const next = setCurrentPage(currentPage + 1);
    console.log("hello", next);
    console.log("paginate", paginate);
  };

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <PaginationMainContainer>
      <PaginationSubContainer>
        {pageNumber.map((number,index) => (
          <PaginationDiv key={index}>
            <PaginationDivContainer
              $activebg={String(number === currentPage)}
              onClick={() => paginate(number)}
            >
              {number}
            </PaginationDivContainer>
          </PaginationDiv>
        ))}
      </PaginationSubContainer>
    </PaginationMainContainer>
  );
};

export default Pagination;
