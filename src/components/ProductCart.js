import React from "react";
import StarRatingComponent from "react-star-rating-component";

const ProductCart = () => {
  return (
    <>
      <div className="col-3">
        <div className="product-card position-relative">
          <div className="product-image">
            <img src="images/watch.jpg" alt="product images" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids Watch bulk 10pic multi colours
            </h5>
            <StarRatingComponent
              starCount={5}
              value={3}
              edit={false}
              size={55}
            />
            <p className="price">$100.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
