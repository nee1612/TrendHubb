// individual filter working fine till now
import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { useState } from "react";
import hero from "../assets/hero.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { AiFillAmazonCircle } from "react-icons/ai";
import {
  Header,
  ProductImage,
  ProductSection,
  ProductDetails,
  ProductTitle,
  Product,
  ProductImageContainer,
  ProductTitleContainer,
  ProductCategory,
  ProductPriceContainer,
  ProductPrice,
  ProductContainer,
  HeaderLottie,
  HeaderTitle,
  HeaderTitleContainer,
  HeaderSubTitleContainer,
  HeaderSubTitle,
  HeaderContainer,
  HeaderTitleText,
  ProductDescripton,
  HeaderButton,
  SortContainer,
  InputSearch,
  SortSubContainer,
  InputContainer,
  HorisontalBreak,
  Footer,
  FooterText,
  SortByCategoryOpt,
  SelectMenu,
  SelectBtn,
  SelectList,
  Lists,
  FooterIcon,
  HorisontalBreakProduct,
  RatingFlex,
  ProductStar,
  TitleFlex,
  Underline,
} from "../styles/Header.style";
import ProductContext from "../context/ProductContext";
import BackToTop from "./BackToTop";
import Star from "./Star";
import { motion } from "framer-motion";
import Loading from "../Loading";
import Pagination from "../Pagination";
const Home = () => {
  const history = useNavigate();
  const { data, filterData, setFilterData, loading, currentPosts } =
    useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Price");
  useEffect(() => {
    switch (sortBy) {
      case "Low to High":
        setFilterData((prev) => [...prev].sort((a, b) => a.price - b.price));
        break;
      case "High to Low":
        setFilterData((prev) => [...prev].sort((a, b) => b.price - a.price));
        break;
      default:
        setFilterData((prev) => [...prev].sort((a, b) => a.id - b.id));
        break;
    }
  }, [sortBy]);

  // Filter the data by category
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const filterDataByCategory = (data) => {
    switch (selectedCategory) {
      case "Men's":
        return data.filter((product) => product.category === "men's clothing");
      case "Women's":
        return data.filter(
          (product) => product.category === "women's clothing"
        );
      case "Jewellery":
        return data.filter((product) => product.category === "jewelery");
      case "Electronics":
        return data.filter((product) => product.category === "electronics");
      default:
        return data; // If no category is selected, show all data
    }
  };

  useEffect(() => {
    setSortBy("Price");
    setFilterData(filterDataByCategory(data));
  }, [selectedCategory]);

  // update filterData when searchTerm changes
  const filterDataBySearchTerm = (data) => {
    const temp = data.filter((sear) => {
      return (
        sear.title
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toLowerCase().replace(/\s/g, "")) ||
        sear.category
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(searchTerm.toLowerCase().replace(/\s/g, ""))
      );
    });
    return temp;
  };

  useEffect(() => {
    setFilterData(filterDataBySearchTerm(data));
  }, [searchTerm]);

  const [isListVisible, setIsListVisible] = useState(false);
  const [isListVisibleCategory, setIsListVisibleCategory] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };
  const toggleListVisibilityCategory = () => {
    setIsListVisibleCategory(!isListVisibleCategory);
  };

  const handlePriceChange = (e) => {
    setSortBy(e.target.id);
    setIsListVisible(false);
  };
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.id);
    setIsListVisibleCategory(false);
  };

  return (
    <>
      {!loading && (
        <div>
          <Header>
            <HeaderTitleContainer>
              <TitleFlex>

              <Underline>_______________ </Underline> <HeaderTitleText>New Trends</HeaderTitleText>
              </TitleFlex>
              <HeaderTitle>Unleash Your Shopping Desires</HeaderTitle>
              <HeaderSubTitle>Unlock exclusive deals and offers</HeaderSubTitle>
              <HeaderButton>Shop Now</HeaderButton>
            </HeaderTitleContainer>
            <HeaderLottie>
              <Lottie animationData={hero} loop={true} />
            </HeaderLottie>
          </Header>
          <SortContainer>
            <SortSubContainer>
              {/* Price */}
              <SelectMenu>
                <SelectBtn onClick={toggleListVisibility}>
                  <span className="BtnText">{sortBy}</span>
                  <BiChevronDown size={20} color="grey" />
                </SelectBtn>
                {isListVisible && (
                  <SelectList onClick={handlePriceChange}>
                    {sortBy !== "Price" && (
                      <Lists id="Featured">Featured</Lists>
                    )}
                    <Lists id="Low to High">Low to High</Lists>
                    <Lists id="High to Low">High to Low</Lists>
                  </SelectList>
                )}
              </SelectMenu>

              {/* Category */}
              <SelectMenu>
                <SelectBtn onClick={toggleListVisibilityCategory}>
                  <span className="BtnText">{selectedCategory}</span>
                  <BiChevronDown size={20} color="grey" />
                </SelectBtn>
                {isListVisibleCategory && (
                  <SelectList onClick={handleCategoryChange}>
                    <Lists id="All">All</Lists>
                    <Lists id="Men's">Men's</Lists>
                    <Lists id="Women's">Women's</Lists>
                    <Lists id="Electronics">Electronics</Lists>
                    <Lists id="Jewellery">Jewellery</Lists>
                  </SelectList>
                )}
              </SelectMenu>
            </SortSubContainer>
          </SortContainer>
          <HorisontalBreak />
          <ProductSection>
            {currentPosts.map((product, index) => (
              <ProductDetails key={index}>
                <ProductContainer>
                  <Product>
                    <ProductImageContainer>
                      <ProductImage src={product.image} title={product.title} />
                      <ProductCategory>
                        {product.category[0].toUpperCase()}
                        {product.category.slice(1)}
                      </ProductCategory>
                    </ProductImageContainer>
                    <HorisontalBreakProduct />
                    <ProductTitleContainer>
                      <ProductTitle>{product.title.slice(0, 60)}</ProductTitle>
                    </ProductTitleContainer>
                    <ProductPriceContainer>
                      <ProductPrice>
                        <span>&#36;</span> {product.price}
                      </ProductPrice>
                    </ProductPriceContainer>
                    <RatingFlex>
                      <ProductStar>
                        <Star stars={product.rating.rate} />
                      </ProductStar>
                      <ProductDescripton to={`/product/${product.id}`}>
                        More Details
                      </ProductDescripton>
                    </RatingFlex>
                  </Product>
                </ProductContainer>
              </ProductDetails>
            ))}
            <BackToTop />
          </ProductSection>
          <Pagination />
          <Footer>
            <FooterText>© 2023 TrendHubb. All rights reserved.</FooterText>
            <FooterIcon>
              <BsFacebook size={33} color="white" />
              <AiFillAmazonCircle size={37} color="white" />
            </FooterIcon>
          </Footer>
        </div>
      )}
      {loading && <Loading />}
    </>
  );
};

export default Home;
