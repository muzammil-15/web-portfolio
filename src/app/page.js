

import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faqs";
import Features from "@/components/Features";

const Home = () => {


  return (
    <main className="w-full">

      <>
        <Hero />
        {/* <Me /> */}
        <Projects />
        <Features />
        <Services />
        <Testimonial />
        <Faq />
      </>

    </main>
  );
};

export default Home;
