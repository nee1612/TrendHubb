import styled from "styled-components";

export const PaginationMainContainer = styled.div`
  position: absolute;
  z-index: 30;
  cursor: pointer;
  /* display: flex;
    justify-content: center; */
  left: 40%;
  @media (max-width: 720px) {
    left: 30%;
  }
  @media (max-width:470px) {
    left: 27%;
  }
  @media (max-width:425px){
    left: 29%;
  }
  @media (max-width:335px){
    left: 22%;
  }
`;
export const PaginationSubContainer = styled.nav`
  display: flex;
  gap: 5px;
`;
export const PaginationDiv = styled.div`
  display: inline-flex;
  -space-x: 1px;
  font-size: 0.875rem;
`;
export const PaginationDivContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  height: 2rem;
  line-height: 1.25rem;
  color: #374151;
  background-color: ${(props) =>
    props.$activebg === "true" ? "#bbbec5" : "#fff"};
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${(props) =>
      props.$activebg === "true" ? "#bbbec5" : "#e5e7eb"};
  }
  @media (max-width:450px) {
    height: 1.5rem;
    line-height: 0.8rem;
    padding:0.25rem 1rem;
    
  }
`;
