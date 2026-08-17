"use-client";
import Head from "next/head";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Services from "./components/services";
import Solutions from "./components/solutions";
import Team from "./components/team";
import Focus from "./components/focus";
import WhyUs from "./components/whyus";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/public/logo.png" />
      </Head>
      <div>
        <Introduction />
        <br />
        <br />
        
        <About />
        <br />
        <br />
        <Focus />
        <br/>
        <br/>
        <WhyUs />
        <br/>
        <br/>
        <Solutions />
        <br />
        <br />
        <Services />
        <br />
        <br />
        <Team />
        <br />
        <br />
        <Contact />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
