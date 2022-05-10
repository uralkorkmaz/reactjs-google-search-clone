import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
