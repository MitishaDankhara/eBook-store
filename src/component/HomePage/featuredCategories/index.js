import React from "react";
import "./category.scss";
export default function FeaturedCategories() {
  return (
    <section className="Featured_Categories">
      <div className="container">
        <div className="feature_heading">
          <h2 className="heading">Featured Categories</h2>
        </div>
        <div className="category_card_grid">
          <div className="category_card">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 256 256"
              height="100px"
              width="100px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M216,40H72A16,16,0,0,0,56,56V72H40A16,16,0,0,0,24,88V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,56H216v62.75l-10.07-10.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L72,109.37ZM184,200H40V88H56v80a16,16,0,0,0,16,16H184Zm32-32H72V132l36-36,49.66,49.66a8,8,0,0,0,11.31,0L194.63,120,216,141.38V168ZM160,84a12,12,0,1,1,12,12A12,12,0,0,1,160,84Z"></path>
            </svg>
            <h3 className="card_heading">Arts & Photography</h3>
            <p>Shop now</p>
          </div>
          <div className="category_card">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="100px"
              width="100px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64m258-80c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M344 336H179.31a8 8 0 0 0-5.65 2.34l-26.83 26.83a4 4 0 0 1-5.66 0l-26.83-26.83a8 8 0 0 0-5.65-2.34H56a24 24 0 0 1-24-24h0a24 24 0 0 1 24-24h288a24 24 0 0 1 24 24h0a24 24 0 0 1-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M256 480h139.31a32 32 0 0 0 31.91-29.61L463 112"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="m368 112 16-64 47-16"
              ></path>
              <path
                fill="none"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="32"
                d="M224 112h256"
              ></path>
            </svg>
            <h3 className="card_heading">Food & Drink</h3>
            <p>Shop now</p>
          </div>
          <div className="category_card">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="100px"
              width="100px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.2426 4.75736C20.705 6.2228 21.2547 8.25005 20.8924 10.1368C21.4614 10.2972 21.9987 10.6002 22.4471 11.0453C23.851 12.439 23.851 14.6987 22.4471 16.0924L17 21.5L13.978 18.5L10.9999 21.485L2.52138 12.993C0.417048 10.637 0.495706 7.01901 2.75736 4.75736C5.02157 2.49315 8.64519 2.41687 11.001 4.52853C13.35 2.42 16.98 2.49 19.2426 4.75736ZM12.962 12.4646C12.346 13.0761 12.346 14.0615 12.962 14.673L17 18.6818L21.038 14.673C21.654 14.0615 21.654 13.0761 21.038 12.4646C20.414 11.8451 19.3962 11.8451 18.77 12.4668L16.9979 14.2206L15.591 12.825L15.2278 12.4646C14.6038 11.8451 13.586 11.8451 12.962 12.4646ZM4.17157 6.17157C2.68183 7.66131 2.60704 10.0473 3.97993 11.6232L10.9999 18.6543L12.559 17.092L11.5529 16.0924C10.149 14.6987 10.149 12.439 11.5529 11.0453C12.9568 9.65157 15.233 9.65157 16.6369 11.0453L16.9996 11.4051L17.3631 11.0453C17.7877 10.6238 18.2921 10.3297 18.828 10.1632C19.2436 8.79577 18.9058 7.25122 17.827 6.1701C16.3279 4.66794 13.9076 4.60701 12.337 6.01687L11.0019 7.21524L9.66605 6.01781C8.09098 4.60597 5.67506 4.66808 4.17157 6.17157Z"></path>
            </svg>
            <h3 className="card_heading">Romance</h3>
            <p>Shop now</p>
          </div>
          <div className="category_card">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="100px"
              width="100px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path>
            </svg>
            <h3 className="card_heading">Health</h3>
            <p>Shop now</p>
          </div>
          <div className="category_card">
            <h3 className="card_heading">Biography</h3>
            <p>Shop now</p>
          </div>
        </div>
      </div>
    </section>
  );
}
