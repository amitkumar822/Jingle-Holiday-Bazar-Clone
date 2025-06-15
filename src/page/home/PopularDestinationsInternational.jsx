import PopularDestinations from "@/components/PopularDestinations";
import React from "react";

function PopularDestinationsInternational() {
  const content =
    "Mother Earth along with mankind have co-created some of the most spectacular places on this planet. From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!";

  const title = "POPULAR DESTINATION INTERNATIONAL";

  const destinationsInternational = [
    {
      name: "DUBAI",
      image: "https://jingleholidaybazar.com/images/DUBAI1.jpg",
    },
    {
      name: "SYDNEY",
      image: "https://jingleholidaybazar.com/images/caption.jpg",
    },
    {
      name: "SINGAPORE",
      image: "https://jingleholidaybazar.com/images/download%20(8).jpg",
    },
  ];

  return (
    <div>
      <PopularDestinations
        destinations={destinationsInternational}
        title={title}
        content={content}
      />
    </div>
  );
}

export default PopularDestinationsInternational;
