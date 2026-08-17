import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
import Services from "./components/services";
import Solutions from "./components/solutions";
import Team from "./components/team";
import Focus from "./components/focus";
import WhyUs from "./components/whyus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GlobalX Innovation Labs | Making Innovations Happen",
  description: "Pioneering STEAM education, corporate digital transformation, green technology transitions, and tech startup growth across emerging markets.",
  icons: {
    icon: "/logo.png",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen space-y-0">
      <Introduction />
      <About />
      <Focus />
      <WhyUs />
      <Solutions />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

