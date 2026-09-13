"use client";

import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

export default function PulseAnimation() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/pulse.json") 
      .then((response) => response.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div className="flex items-center justify-center">
      <Lottie
        loop
        animationData={animationData}
        play
        className="w-6 h-6"
      />
    </div>
  );
}
