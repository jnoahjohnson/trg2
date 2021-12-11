import React, { useState } from "react";

export default function ImageSection({ images, image }) {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <div class="w-full row-start-2 md:row-start-1 md:col-span-2">
      <img src={mainImage} class="w-full h-auto object-cover mb-8" />
      <div class="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <img
            src={image}
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </div>
  );
}
