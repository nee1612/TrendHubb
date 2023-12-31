import React from "react";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Top from "../assets/topButtonn.json";
import { ToTopMain, ToTopSubMain } from "../styles/BackToTop.style";

const BackToTop = () => {
  // const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: Top,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice ",
  //     },
  //   };
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 1,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTop && (
        <ToTopMain>
          <ToTopSubMain
            onClick={scrollUp}>
            <Lottie animationData={Top} loop={true} />
          </ToTopSubMain>
        </ToTopMain>
      )}
    </>
  );
};

export default BackToTop;
