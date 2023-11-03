import React from 'react';
import Lottie from "lottie-react";
import loading from "./assets/loading.json";
import { LoadingContainer, LoadingLottie } from './styles/Loading.style';

const Loading = () => {
  return (
    <div>
            <LoadingContainer>
                <LoadingLottie>
                <Lottie animationData={loading}  loop={true} />
                </LoadingLottie>
            </LoadingContainer>
    </div>
  )
}

export default Loading