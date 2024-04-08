import React from "react";
import "./herobanner.scss";
import Herobanner_Img from "../../../assets/images/img1-12.png";
export default function Herobanner() {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="herobanner_grid">
          <div className="herobanner_grid_item">
            <div className="hero_text">
              <p>The Bookworm Editors’</p>
              <h1>
                Featured Books of the <span>February</span>
              </h1>
              <div className="hero_banner_btn">See more</div>
            </div>
          </div>
          <div className="herobanner_grid_item">
            <div className="round"></div>
            <img src={Herobanner_Img} alt="Hero Banner" />
          </div>
        </div>
      </div>
    </section>
  );
}
