import React from "react";
import "./herobanner.scss";
import Herobanner_Img from "../../../assets/images/img1-12.png";
export default function Herobanner() {
  return (
    <section className="hero_section">
      <div className="container">
        <div className="herobanner_grid_main">
          <div className="herobanner_text">
            <h4 className="herobanner_sub_title">The Bookworm Editors’</h4>
            <h1 className="herobanner_heading">
              Featured Books of the <span>February</span>
            </h1>
            <div className="see_more_btn">See More</div>
          </div>
          <div className="herobanner_image">
            <img src={Herobanner_Img} alt="Books" />
          </div>
        </div>
      </div>
    </section>
  );
}
