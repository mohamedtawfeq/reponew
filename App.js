import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Nave from "./component/Nave/Nave";
import Menu2 from "./component/Menu2";
import { css } from "@emotion/css";
import PropagateLoader from "react-spinners/PropagateLoader";
import Navebar from "./component/Nave/Nave2";

function App() {
  const [loading, setLoading] = useState(false);
  const override = css`
    display: block;
    border-color: red;
    margin-top: 50%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <PropagateLoader
          color={"#ffd300"}
          Loading={loading}
          css={override}
          margin-top={100}
          size={30}
        />
      ) : (
        <>
          <Fragment>
            <Nave />
          </Fragment>
          <BrowserRouter>
            {/* <Navebar /> */}
            <Routes>
              <Route path="/ooo" element={<Home />} exact />
              <Route path="/Menu" element={<Menu2 />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
}
export default App;
