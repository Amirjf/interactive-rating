import React, { useState } from "react";
import "./App.css";
import ThankYouPage from "./components/thank-you.component";
import RatingPage from "./components/rating-page.component";

function App() {
  const [changeRating, setChangeRating] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="info-container">
          {rating > 0 ? (
            <ThankYouPage rating={rating} />
          ) : (
            <RatingPage
              setChangeRating={setChangeRating}
              changeRating={changeRating}
              setRating={setRating}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
