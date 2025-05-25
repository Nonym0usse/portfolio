import Image from "next/image";
import Hero from "./common/Hero";
import Features from "./common/Features";
import About from "./common/About";
import Team from "./common/Team";
import Portfolio from "./common/Portfolio";
import Testimonials from "./common/Testimonials";
import Brands from "./common/Brands";
import Price from "./common/Price";
import Blog from "./common/Blog";
import Support from "./common/Support";
import CTA from "./common/CTA";
import featureDataIntroduction from "./data/feature-introduction.json";
import featureDataSkills from "./data/feature-skills.json";

export default function Home() {

  return (
    <>
      <Hero />
      <Features featureData={featureDataIntroduction} />
      <About />
      <Team />
      <Portfolio />
      <Testimonials />
      <Features featureData={featureDataSkills} />
      <Brands />
      <Price />
      <Blog />
      <Support />
      <CTA />
    </>
  );
}
