import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Categorys from "../components/Products/Categorys";
import Feed from "../components/Products/Feed";

const Home = () => {
  return (
    <main>
      <Banner />
      <Categorys />
      <Feed />
    </main>
  );
};

export default Home;
