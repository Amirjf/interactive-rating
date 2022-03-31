import React, { useState } from "react";
import ThankYou from "./assets/images/illustration-thank-you.svg";
import Star from "./assets/images/illustration-thank-you.svg";
import "./App.css";

function App() {
  const [changeRating, setChangeRating] = useState(0);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ratingValue = changeRating;
    setRating(ratingValue);
  };

  return (
    <div className="App">
      <div className="container">
        {rating > 0 ? (
          <div className="info-container">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus eaque aliquid repellat consequuntur.
              </div>
            </div>
          </div>
        ) : (
          <div className="info-container">
            <div className="star-container">
              <img src={Star} />
            </div>
            <h1>How did we do ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eaque aliquid repellat consequuntur.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="ratings-container">
                <div className="input-container">
                  <input
                    className="number"
                    name="number"
                    id="number1"
                    onChange={(e) => setChangeRating(e.target.value)}
                    type="radio"
                    value="1"
                  />
                  <label for="number1"></label>
                  <span className="number-value">1</span>
                </div>
                <div className="input-container">
                  <input
                    id="number2"
                    onChange={(e) => setChangeRating(e.target.value)}
                    name="number"
                    className="number"
                    type="radio"
                    value="2"
                  />
                  <label for="number2"></label>
                  <span className="number-value">2</span>
                </div>
                <div className="input-container">
                  <input
                    id="number3"
                    name="number"
                    onChange={(e) => setChangeRating(e.target.value)}
                    className="number"
                    type="radio"
                    value="3"
                  />
                  <label for="number3"></label>
                  <span className="number-value">3</span>
                </div>
                <div className="input-container">
                  <input
                    id="number4"
                    name="number"
                    onChange={(e) => setChangeRating(e.target.value)}
                    className="number"
                    type="radio"
                    value="4"
                  />
                  <label for="number4"></label>
                  <span className="number-value">4</span>
                </div>
                <div className="input-container">
                  <input
                    id="number5"
                    name="number"
                    onChange={(e) => setChangeRating(e.target.value)}
                    className="number"
                    type="radio"
                    value="5"
                  />
                  <label for="number5"></label>
                  <span className="number-value">5</span>
                </div>
              </div>
              <input className="submit-button" type="submit" value="SUBMIT" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
