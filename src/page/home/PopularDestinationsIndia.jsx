import PopularDestinations from "@/components/PopularDestinations";
import React from "react";

function PopularDestinationsIndia() {
  const content =
    "India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world's seventh largest nation by area and the second largest in terms of population, India boasts a rich heritage that's the result of centuries of different cultures and religions leaving their mark";

  const title = "POPULAR DESTINATION IN INDIA";

  const destinationsIndia = [
    {
      name: "Amritsar, Punjab",
      image:
        "https://jingleholidaybazar.com/images/Jallianwala-Bagh_1000X650_220618.jpg",
    },
    {
      name: "Gangtok, Sikkim",
      image: "https://jingleholidaybazar.com/images/Gangtok.jpg",
    },
    {
      name: "Agra, Uttar Pradesh",
      image: "https://jingleholidaybazar.com/images/Taj-mahal.jpg",
    },
  ];

  return (
    <div>
      <PopularDestinations
        destinations={destinationsIndia}
        title={title}
        content={content}
      />
    </div>
  );
}

export default PopularDestinationsIndia;
