import { Link } from "react-router-dom";
import styled from "styled-components";
export const Header = styled.div`

  height: 30rem;
  padding: 0 4rem 0 4rem;
  display: flex;
  gap: 20px;
  justify-content: center;
  /* flex-wrap: wrap; */
  margin-bottom: 3rem;
  background-color: #12486b;
  align-items: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: 55rem;
    padding: 0 2rem 0 2rem;
    gap: 1px;
  }
  @media (max-width: 430px) {
    height: 40rem;
  }
`;
export const TitleFlex=styled.p`
display: flex;
align-items: baseline;
`
export const Underline=styled.p`
color: white;
/* font-weight: 600; */
/* width: 1rem; */
`
export const HeaderTitleText = styled.div`
  font-size: 20px;
  font-family: 'Edu TAS Beginner', cursive;
  color: white;
  padding-left: 5px;
  font-weight: bold;
`;
export const HeaderContainer = styled.div`
  /* width: 100vw; */
`;
export const HeaderTitle = styled.div`
  font-size: 55px;
  font-family: "Signika Negative", sans-serif;
  color: white;
  @media (max-width: 768px) {
    font-size: 45px;
  }
`;
export const HeaderTitleContainer = styled.div`
  width: 50rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const HeaderSubTitle = styled.div`
  font-size: 25px;
  font-family: "Work Sans", sans-serif;
  padding-top: 1rem;
  color: white;
  padding-bottom: 1rem;
`;
export const HeaderSubTitleContainer = styled.div`
  /* width: 50%; */
`;
export const HeaderButton = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  display: inline-flex;
  width: 6rem;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  padding: 1px 1rem 1px 1rem;
  font-size: medium;
  line-height: 34px;
  color: white;
  background-color: black;
  cursor: pointer;
  &:hover {
    background-color: #232d3f;
  }
`;
// inline-flex w-full items-center justify-center rounded-sm bg-slate-800  px-3.5 py-1 font-medium leading-6 text-white hover:bg-black/80

export const HeaderLottie = styled.div`
  width: 40rem;
  @media (max-width: 768px) {
    width: 60rem;
  }
`;

export const HorisontalBreak = styled.hr`
  background-color: gray;
  padding: 0.3px;
`;
export const ProductDetails = styled.div`
  /* position: relative;
border-radius: 1px;
height: 20rem;
background-color:red ;
border: 1px solid green;
margin-bottom: 6rem;
padding: 0rem;
max-width: 30rem; */
`;
export const RatingFlex = styled.div`
  display: flex;
  align-items: center;
  /* position: relative; */
`;
export const Product = styled.div`
  width: 19rem;
  height: 27rem;
  border-radius: 8px;
  box-shadow: 4px 4px 14px -7px lightgrey;
  padding: 1rem;
  background-color: white;
  position: relative;
  @media (max-width: 1024px) {
    width: 23rem;
  }
  @media (max-width: 768px) {
    width: 18rem;
  }
  @media (max-width: 430px) {
    width: 20rem;
  }
  @media (max-width:384px) {
    width: 17rem;
  }
  @media (max-width: 320px) {
    width: 15rem;
  }
`;
export const ProductContainer = styled.div`
  margin-bottom: 2rem;
`;
export const ProductStar = styled.div`
  position: absolute;
  /* top: -10px; */
  /* bottom: -30rem; */
  bottom: 2rem;
`;
export const HorisontalBreakProduct = styled.hr`
  background-color: gray;
`;
export const ProductSection = styled.div`
  margin-top: 3rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;
export const ProductImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 50;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 430px) {
    &:hover {
      opacity: 1;
    }
  }
  /* border: 1.5px solid lightgray; */
  border-radius: 2px;
`;
export const ProductImage = styled.img`
  width: 170px;
  height: 210px;
  padding: 1.8rem;
`;
export const ProductCategory = styled.div`
  font-size: 13px;
  font-family: "Roboto Mono", monospace;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: black;
  color: white;
  padding: 0.3rem 0.7rem 0.3rem 0.7rem;
  border-radius: 50px;
  z-index: 60;
`;

export const ProductTitle = styled.div`
  font-size: 16px;
  color: #4f4a45;
  font-family: "Questrial", sans-serif;
  /* font-weight: ;     */
  padding: 8px 0 0 0;
`;
export const ProductTitleContainer = styled.div`
  padding: 0 0 0.4rem 0;
`;
export const ProductPriceContainer = styled.div`
  display: flex;
`;
export const ProductPrice = styled.div`
  font-family: "Questrial", sans-serif;
  color: #f99417;
  font-weight: 600;
  font-size: 18px;
  padding-top: 8px;
`;
export const ProductDescripton = styled(Link)`
  font-family: "Plus Jakarta Sans", sans-serif;
  text-decoration: none;
  /* font-style: 'Josefin Sans', sans-serif; */
  position: absolute;
  bottom: 1.5rem;
  right: 1rem;
  font-size: small;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.6rem 1rem 0.6rem 1rem;
  background-color: black;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const SelectMenu = styled.div`
  width: 200px;
  margin: auto;
  @media (max-width: 580px) {
    width: 160px;
  }
  @media (max-width: 430px) {
    width: 150px;
  }
  @media (max-width: 375px) {
    width: 135px;
  }
`;
export const SelectBtn = styled.div`
  display: flex;
  font-family: "Space Mono", monospace;
  align-items: center;
  height: 15px;
  background-color: #fff;
  padding: 15px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  justify-content: space-between;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 580px) {
    padding: 8px;
    font-size: 14px;
    margin-bottom: 1rem;
  }
  @media (max-width: 375px) {
    padding: 9px;
    font-size: 15px;
  }
  @media (max-width:376px) {
    /* width: 7rem; */
  }
`;
export const SelectList = styled.ul`
  position: absolute;
  width: 195px;
  padding: 1px;
  background-color: white;
  border-radius: 8px;
  margin-top: 1px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
 
  @media (max-width: 425px) {
    width: 150px;
  }
  
  @media (max-width: 320px) {
    width: 150px;
  }
`;
export const Lists = styled.li`
  display: flex;
  height: 50px;
  cursor: pointer;
  padding: 0 16px;
  border-radius: 8px;
  align-items: center;
  background-color: #fff;
  &:hover {
    background-color: #f2f2f2;
  }
  @media (max-width: 580px) {  
    font-size: 14px;
  }
  @media (max-width:380px) {
    font-size:17px ;
  }
`;
export const ListsText = styled.span`
  font-size: 18px;
  color: #333;
`;

export const SortByCategoryOpt = styled.option`
  padding: 1rem;
  margin: 0 1rem 0 1rem;
  outline: none;
  border: none;
`;

// export const SortBtCategory=styled.div`
// display: flex;
// align-items: center ;
// justify-content: space-between;
// margin-left: 3rem;
// background-color: #F5F7F8;
// font-weight: 600;
// width: 100%;
// border-style: none;
// border: none;
// outline: none;
// padding: 0.6rem 1rem 0.6rem 1rem;
// border-radius: 3rem;
// cursor: pointer;
// `

export const InputSearch = styled.input`
  height: 45px;
  width: 20rem;
  display: flex;
  border-radius: 8px;
  border-style: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  font-size: 15px;
  margin-right: 3rem;
  padding: 0 16px;

  &:focus {
    outline: none;
  }
  @media (max-width: 910px) {
    width: 90%;
    /* width: 10rem; */
  }
  @media (max-width: 730px) {
    width: 80%;
  }
  @media (max-width: 430px) {
    width: 80%;
  }
  @media (max-width: 375px) {
    width: 80%;
  }
`;
export const InputContainer = styled.div`
  @media (max-width: 768px) {
    padding-left: 2rem;
    width: 100%;
  }
  @media (max-width: 380px) {
    padding-left: 1rem;
  }
`;
export const SortSubContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: 2rem;

  @media (max-width: 380px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 320px) {
    /* margin-left: 1rem; */
    gap: 1rem;
  }
`;
export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media (max-width: 425px) {
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 30px;
  justify-content: space-between;
  background-color: black;
  margin-top: 5rem;
  bottom: 7px;
  height: 6rem;
  width: calc(100%-12px);
 @media (max-width: 630px) {
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 1rem;
 }
 @media (max-width:525px) {
  height: 9rem;
  padding: 5px;

 }
`


export const FooterText = styled.div`
  color: gray;
  text-align: center;
  font-size: 22px;
  @media (max-width:520px) {
    font-size: 18px;
  }
`;

export const FooterIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-right: 2rem;
  @media (max-width: 630px) {
    padding-right: 0rem;
  }
`
