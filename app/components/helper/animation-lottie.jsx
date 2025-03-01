"use client";

import dynamic from 'next/dynamic';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  if (!animationPath) {
    console.warn('Animation path is required for AnimationLottie component');
    return null;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    style: {
      width: width || '95%',
    }
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;