import React, { useState } from "react";

export default function ImageSection({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  
  return (
    <div className="w-full row-start-2 md:row-start-1 md:col-span-2">
      <img src={mainImage} className="w-full h-112 object-cover mb-8" />
      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <img
            src={image}
            key={image}
            className="w-full h-36 object-cover hover:scale-105 transition-transform duration-200"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
}
