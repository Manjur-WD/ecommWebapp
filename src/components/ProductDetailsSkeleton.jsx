import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductDetailsSkeleton = () => {
  return (
    <>
      <section className="product-details p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="bg-white w-75 rounded-4 px-2 py-5 text-center">
              <Skeleton height={400} />
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <Skeleton height={80}/>
              <Skeleton height={50} width={150}/>
              <Skeleton count={4} />
              <Skeleton height={100} width={300}/>
              <div className="product-action-btn mt-3 d-flex align-items-center gap-3">
              <Skeleton height={50} width={200}/>
              <Skeleton height={50} width={200}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetailsSkeleton
