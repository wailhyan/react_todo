import React from "react";
import emptySvg from '../img/empty.svg';

const EmptyList = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-10">
      <img width={150} className="mb-5" src={emptySvg} alt="empty svg" />
      <p className="text-sm">There is no list.</p>
    </div>
  );
};

export default EmptyList;
