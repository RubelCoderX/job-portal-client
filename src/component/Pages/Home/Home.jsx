import React from "react";
import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";

import CreateAccount from "../CreateAccount/CreateAccount";
import Category from "../Category/Category";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import Testimonial from "../Testimonial/Testimonial";
import ExtraSection from "../ExtraSection/ExtraSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Popular></Popular>
      <CreateAccount></CreateAccount>
      <Category></Category>
      <FeaturedJob></FeaturedJob>
      <Testimonial></Testimonial>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
