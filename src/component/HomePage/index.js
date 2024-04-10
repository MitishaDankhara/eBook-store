import React from "react";
import Herobanner from "./herobanner";
import FeaturedCategories from "./featuredCategories";
import BestSellingBook from "./bestSellingBooks";

export default function HomePage() {
  return (
    <div>
      <Herobanner />
      <FeaturedCategories />
      <BestSellingBook />
    </div>
  );
}
