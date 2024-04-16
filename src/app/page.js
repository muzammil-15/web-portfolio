

import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faqs";

const Home = () => {


  return (
    <main className="w-full">

      <>
        <Hero />
        {/* <Me /> */}
        <Projects />
        <Services />
        <Testimonial />
        <Faq />
      </>

    </main>
  );
};

export default Home;
