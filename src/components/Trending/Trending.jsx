import React from "react";
import "./Trending.css";
// import "./../../assets";
import plate1 from "../../assets/plate1.jpg";
import plate2 from "../../assets/plate2.jpg";
import plate3 from "../../assets/plate3.jpg";
const Trending = () => {
  return (
    <>
      <div className="main2">
        <div className="title2">
          <h2>Most Trending near you</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            perspiciatis doloremque quae ullam deleniti dolorum.
          </p>
        </div>
        <div className="cards1">
          <div className="card1">
            <img src={plate1} lt="plate1" />
            <h3>Italian Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
            <div className="options1">
              <a href="#">
                <b>Wishlist</b>
              </a>
              <a href="#">
                <b>Order</b>
              </a>
            </div>
          </div>
          <div className="card1">
            <img src={plate2} alt="plate2" />
            <h3>Funday With Non Veg</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              Lorem ipsum dolor sit amet.
            </p>
            <div className="options1">
              <a href="#">
                <b>Wishlist</b>
              </a>
              <a href="#">
                <b>Order</b>
              </a>
            </div>
          </div>
          <div className="card1">
            <img src={plate3} alt="plate3" />
            <h3>Indian Meals</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              dolor! Lorem ipsum dolor.
            </p>
            <div className="options1">
              <a href="#">
                <b>Wishlist</b>
              </a>
              <a href="#">
                <b>Order</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
