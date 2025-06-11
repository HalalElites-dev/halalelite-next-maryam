import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";


export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <Services/>
    <Testimonials/>
  </main>
  );
}
