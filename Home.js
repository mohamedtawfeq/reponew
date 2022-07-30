import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import PageItem from "./../../imag/new food.jpg";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>2002+</h2>
              <h6>SAVING</h6>
            </div>
            <div className="col-md-3">
              <h2>543+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>875+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>479+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="newfood">
        <div className="container">
          <div className="row">
            <div className="namepage">Limited Offers</div>

            <div className="col-md-6">
              <img src={PageItem} alt="" title="img" />
            </div>
            <div className="col-md-6">
              <h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cumque, nostrum.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                voluptatum eligendi reiciendis optio
              </p>
              <button>
                <a href="#dsd">order</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
