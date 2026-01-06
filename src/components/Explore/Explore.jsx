import React from "react";
import "./Explore.css";

const Explore = () => {
  return (
    <>
      <div className="main">
        <div className="title">
          <h2>Explore Our Other Items</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            perspiciatis doloremque quae ullam deleniti dolorum aliquid quia
            excepturi ratione quam. Lorem ipsum dolor sit.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <i className="ri-arrow-up-circle-fill"></i>
            <h3><em>Press Like</em></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              quidem commodi facere accusamus quasi laudantium officiis nemo
              ullam officia est.
            </p>
          </div>
          <div className="card">
            <i className="ri-disqus-fill"></i>
            <h3><em>Please Comment</em></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              quidem commodi facere accusamus quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ab?
            </p>
          </div>
          <div className="card">
            <i className="ri-money-pound-circle-fill"></i>
            <h3><em>Subscribe If You Like</em></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              quidem commodi facere accusamus quasi laudantium officiis nemo
              ullam officia est. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
