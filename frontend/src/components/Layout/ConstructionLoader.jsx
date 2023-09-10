import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Assets/animations/animation_lmbid6qp.json";

const ConstructionLoader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center">
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className="text-center mb-14 text-[25px] text-[#000000a1]">
        This section is still under construction...
      </h5>
    </div>
  );
};

export default ConstructionLoader;
