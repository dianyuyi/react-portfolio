import React from "react";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import WorksList from "../components/WorksList";

const Home = () => {
  return (
    <main>
      <Hero />
      <Profile />
      <WorksList />
    </main>
  );
};

export default Home;
