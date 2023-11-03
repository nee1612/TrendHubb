import styled from "styled-components";


export const ItemMainContainer=styled.div`
background-color: white;
border-top-left-radius: 8px;      
border-top-right-radius: 8px;      
margin: 2rem 3rem 4rem 3rem;
height: 25rem;
width: calc(100vw-2rem );
/* margin-bottom: 0rem; */
display: block;
@media (max-width: 768px) {
    margin-bottom: 30rem;
}
@media (max-width:430px) {
    margin: 2.5rem 1.5rem 5rem 1.5rem;
    
}
@media (max-width:540px) {
    margin-bottom: 40rem;
}
@media (max-width:540px) {
    margin-bottom: 40rem;
}
@media (max-width:540px) {
    margin-bottom: 45rem;
}
`
export const ItemImage=styled.img`
width:240px;
height: 300px;
@media (max-width:430px) {
    width: 200px;
    height: 240px;
}
`
export const ImageContainer=styled.div`
padding: 1rem;

border-radius: 3px;
`
export const TextContainer=styled.div`
padding-right:1rem;
@media (max-width:768px) {
   background-color:#89CFF3;
   margin-bottom: 3rem;
   /* padding: 1rem; */
   padding: 0.2rem 1.5rem 0.2rem 1.5rem;
}
@media (max-width:px) {
    margin-bottom: 15rem;
}
`
export const ItemDetails=styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:5rem ;
@media (max-width:768px) {
    flex-wrap: wrap;
    gap: 0px;
}
`
export const ItemTitle=styled.p`
font-size: 30px;
font-weight: 600;
@media (max-width:430px) {
    /* font-size: 27px; */
}
`
export const ItemDesc=styled.p`
font-size: 20px;
padding-bottom: 1rem;
/* font-family: 'Roboto Slab'; */
font-family: 'Noto Serif', serif;
`
export const ItemCategory=styled.p`
font-size: medium;
color: grey;
/* padding-bottom: 1rem; */
`
export const ItemPrice=styled.p`
font-size: 21px;
font-weight: 600;
font-family: 'Lato', sans-serif;
color: #232D3F;
`
export const Footer = styled.div`
position: fixed;
  display: flex;
  align-items: center;
  padding: 12px 30px;
  justify-content: space-between;
  background-color: black;
  margin-top: 15rem;
  bottom: 0px;
  height: 6rem;
  width: 100vw; 
  @media (max-width:765px) {
    /* margin-bottom: 70rem; */
  }
 @media (max-width: 630px) {
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 1rem;
  width: 92%;
 }
 @media (max-width:525px) {
  height: 9rem;
 }
`


export const FooterText = styled.div`
  color: gray;
  text-align: center;
  font-size: 22px;
  @media (max-width:530px) {
    font-size: 20px;
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