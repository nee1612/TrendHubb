import styled from "styled-components";


export const Nav=styled.div`
height: 3.5rem;
/* border-bottom: ; */
box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.3);
position:sticky;
top: 0;
z-index: 70;
background-color: white;

`
export const HomeIcon=styled.div`
position: absolute;
display: flex;
gap: 1.5rem;
align-items:center ;
padding-left: 2rem;
top: -2.9rem;
-webkit-tap-highlight-color: transparent;
cursor: pointer;
@media (max-width:430px) {
    padding-left: 1rem;
    gap: 1rem;
    top: -1.5rem;

}

`
export const NavTitle=styled.p`
font-size: 40px; 
font-weight: 700;
padding: 0px;
font-family: Agbalumo;
color: #3D0C11;
-webkit-tap-highlight-color: transparent;
cursor: pointer;
@media (max-width:430px) {
    font-size: 28px;
}


`
