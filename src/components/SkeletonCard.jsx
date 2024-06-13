import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = () => {
  return (
    <div className="product-card border px-md-5 px-3 bg-white shadow rounded-4 mb-3">
      <div className="product-image my-3">
        <Skeleton height={290} />
      </div>
      <div className="product-details mt-3">
        <div className="title text-center">
          <Skeleton height={20} width={180} />
        </div>
        <div className="price-rating mt-2 d-flex justify-content-between align-items-center">
          <div className="price">
            <Skeleton width={60} />
          </div>
          <div className="ratings">
            <Skeleton width={80} />
          </div>
        </div>
        <div className="add-to-cart-button my-3 text-center">
          <Skeleton width={100} height={30} />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
