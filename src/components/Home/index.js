import { useState } from "react";
import Banner from "./Banner";
import Main from "./Main";
import PopularTag from "./PopularTag";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="content">
        <Main />
        <PopularTag />
      </div>
    </div>
  );
}

export default Home;
