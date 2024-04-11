import React, { useState } from "react";
import "./bestSellingBook.scss";
import Book1 from "../../../assets/images/Book1.jpg";

export default function BestSellingBook() {
  const BestSellingBooks = [
    {
      image: Book1,
      category: "kindle",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "$1.30",
      deletePrice: "$1.75",
      add_cart: "add to cart",
      Like: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
    },
    {
      image: Book1,
      category: "kindle",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "$1.30",
      deletePrice: "$1.75",
      add_cart: "add to cart",
      Like: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
    },
    {
      image: Book1,
      category: "kindle",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "$1.30",
      deletePrice: "$1.75",
      add_cart: "add to cart",
      Like: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
    },
    {
      image: Book1,
      category: "kindle",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "$1.30",
      deletePrice: "$1.75",
      add_cart: "add to cart",
      Like: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
    },
    {
      image: Book1,
      category: "kindle",
      title: "Angry God (All Saints High Book 3)",
      author: "L.J. Shen",
      price: "$1.30",
      deletePrice: "$1.75",
      add_cart: "add to cart",
      Like: (
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      ),
    },
  ];
  const [likeStates, setLikeStates] = useState(
    Array(BestSellingBooks.length).fill(false)
  );
  const toggleLike = (index) => {
    const newLikeStates = [...likeStates];
    newLikeStates[index] = !newLikeStates[index];
    setLikeStates(newLikeStates);
  };
  return (
    <section className="best_selling_book">
      <div className="container">
        <div className="best_selling_heading">
          <h3 className="heading">Bestselling Books</h3>
        </div>
        <div className="best_selling_card_grid">
          {BestSellingBooks &&
            BestSellingBooks?.map((Data, index) => {
              return (
                <div className="best_selling_card_item" key={index}>
                  <img src={Data?.image} alt="Book" />
                  <div className="card_desc">
                    <p className="category">{Data?.category}</p>
                    <h5 className="book_title">{Data?.title}</h5>
                    <h6 className="author_name">{Data?.author}</h6>
                    <div className="price">
                      <span>{Data?.price}</span>
                      <del>{Data?.deletePrice}</del>
                    </div>
                    <div className="add_cart">
                      <div>{Data?.add_cart} </div>
                      <div
                        className={`like_icon ${
                          likeStates[index] ? "red" : ""
                        }`}
                        onClick={() => toggleLike(index)}
                      >
                        {Data?.Like}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* <div className="best_selling_card_item">
            <img src={Book1} alt="Book" />
            <div className="card_desc">
              <p className="category">kindle</p>
              <h5 className="book_title">Angry God (All Saints High Book 3)</h5>
              <h6 className="author_name">L.J. Shen</h6>
              <div className="price">
                <span>$1.30</span>
                <del>$1.75</del>
              </div>
              <div className="add_cart">
                add to cart{" "}
                <div
                  className={`like_icon ${toggle ? "red" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="26px"
                    width="26px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Heart">
                      <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="best_selling_card_item">
            <img src={Book1} alt="Book" />
            <div className="card_desc">
              <p className="category">kindle</p>
              <h5 className="book_title">Angry God (All Saints High Book 3)</h5>
              <h6 className="author_name">L.J. Shen</h6>
              <div className="price">
                <span>$1.30</span>
                <del>$1.75</del>
              </div>
              <div className="add_cart">
                add to cart{" "}
                <div
                  className={`like_icon ${toggle ? "red" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="26px"
                    width="26px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Heart">
                      <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="best_selling_card_item">
            <img src={Book1} alt="Book" />
            <div className="card_desc">
              <p className="category">kindle</p>
              <h5 className="book_title">Angry God (All Saints High Book 3)</h5>
              <h6 className="author_name">L.J. Shen</h6>
              <div className="price">
                <span>$1.30</span>
                <del>$1.75</del>
              </div>
              <div className="add_cart">
                add to cart{" "}
                <div
                  className={`like_icon ${toggle ? "red" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="26px"
                    width="26px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Heart">
                      <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="best_selling_card_item">
            <img src={Book1} alt="Book" />
            <div className="card_desc">
              <p className="category">kindle</p>
              <h5 className="book_title">Angry God (All Saints High Book 3)</h5>
              <h6 className="author_name">L.J. Shen</h6>
              <div className="price">
                <span>$1.30</span>
                <del>$1.75</del>
              </div>
              <div className="add_cart">
                add to cart{" "}
                <div
                  className={`like_icon ${toggle ? "red" : ""}`}
                  onClick={() => setToggle(!toggle)}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="26px"
                    width="26px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Heart">
                      <path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
