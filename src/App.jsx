import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import FeatureCard from "./sections/FeatureCard";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonial from "./sections/Testimonial";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCard />
      <ExperienceSection />
      <TechStack />
      <Testimonial />
    </>
  );
};

export default App;
