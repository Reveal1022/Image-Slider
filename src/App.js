import "./index.css";
import React, { useState } from "react";
import image1 from "./Images/image1.jpeg";
import image2 from "./Images/image2.jpeg";
import image3 from "./Images/image3.jpeg";
import image4 from "./Images/image4.jpeg";
import image5 from "./Images/image5.jpeg";
import image6 from "./Images/image6.jpeg";
import image8 from "./Images/image8.jpeg";
import image9 from "./Images/image9.jpeg";
import image10 from "./Images/image10.jpeg";
import image11 from "./Images/image11.jpeg";
import image12 from "./Images/image12.jpeg";
import image13 from "./Images/image13.jpeg";
import image14 from "./Images/image14.png";
import image15 from "./Images/image15.jpeg";

import ImageSlider from "./ImageSlider";

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];

function App() {
  return (
    <div className="App">
      <div>
        <ImageSlider Imageurls={imageArray} />
      </div>
    </div>
  );
}

export default App;
