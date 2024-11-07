import React from "react";
import { BannerSection } from "./BannerSection";
import { InfoSection } from "./InfoSection";
import './Home.scss'
export const Home = () => {
  return (
    <div className="home">
      <div className="home__sectionOne">
        <BannerSection></BannerSection>
        <InfoSection></InfoSection>
      </div>
    </div>
  );
};
