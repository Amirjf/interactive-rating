import React from "react";
import ThankYou from "../assets/images/illustration-thank-you.svg";

const ThankYouPage = ({ rating }) => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-image-container">
        <img src={ThankYou} />
      </div>
      <div className="selected-rating-container">
        {`You selected ${rating} out of 5`}
      </div>
      <div className="thank-you-title">
        <h1>Thank You !</h1>
      </div>
      <div className="thank-you-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eaque
        aliquid repellat consequuntur.
      </div>
    </div>
  );
};

export default ThankYouPage;
