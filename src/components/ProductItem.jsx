import React from 'react'
import { useContext,useState,useEffect } from 'react'
import ProductContext from "../context/ProductContext"
import { useNavigate, useParams } from "react-router";
import { ImageContainer, ItemCategory, ItemDesc, ItemDetails, ItemImage, ItemMainContainer, ItemPrice, ItemTitle, TextContainer,Footer, FooterIcon, FooterText } from '../styles/ProductItem.style';
import Star from './Star';
import { BsFacebook } from 'react-icons/bs';
import { AiFillAmazonCircle } from 'react-icons/ai';
import Loading from "../Loading";

const ProductItem = () => {
  const { data, loading } = useContext(ProductContext);
  const { id } = useParams();
  const [description, setDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useNavigate();
  const filteredDataById = (id) => {
    let tempData;
    tempData = data.filter((item) => {
      return item.id == id;
    });
    return tempData[0];
  };
  const fetchProductById = async (productId) => {
    setIsLoading(true);
    setError(null);

    try {
      // You can make an API request here to fetch the product data by ID
      const response = await fetch(`/api/products/${productId}`); // Replace with your API endpoint
      if (response.ok) {
        const productData = await response.json();
        setDescription(productData);
      } else {
        setError('Failed to fetch product data');
      }
    } catch (err) {
      setError('Error fetching product data');
      console.error('Error fetching product data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (data.length !== 0) {
      setDescription(filteredDataById(id));
    } else {
      // If data is not available, fetch it by ID
      fetchProductById(id);
    }
  }, [data, id]);



  return (
    <>
      <>
    {!isLoading && (
      
        <>
        {description !==null && (
          <div>
          <ItemMainContainer>
            <ItemDetails>
              <ImageContainer>
                <ItemImage src={description.image} alt={description.title} />
              </ImageContainer>
              {/* <hr /> */}
              <TextContainer>
                <ItemTitle>{description.title}</ItemTitle>
               < Star stars={description.rating.rate} count={description.rating.count} />
                {/* <div>{description.rating.rate}</div> */}
                <ItemPrice> <span>&#36;</span> {description.price}</ItemPrice>
                <ItemDesc>{description.description[0].toUpperCase()}{description.description.slice(1,398)}</ItemDesc>
                {/* <ItemCategory>In: {description.category[0].toUpperCase()}{description.category.slice(1)}</ItemCategory> */}
              </TextContainer>
          </ItemDetails>
        </ItemMainContainer>
        <Footer>
        <FooterText>© 2023 TrendHubb. All rights reserved.</FooterText>
        <FooterIcon>
          <BsFacebook size={33} color="white" />
          <AiFillAmazonCircle size={37} color="white" />
        </FooterIcon>
      </Footer>
      </div>
      )}
      </>
        )
    }
    </>
    {isLoading && <Loading />}
    </>
  )
}

export default ProductItem