import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
    </main>
  );
}
