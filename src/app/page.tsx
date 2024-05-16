import AboutMe from "@/sections/about";
import Contact from "@/sections/contact";
import Hero from "@/sections/hero";
import Skills from "@/sections/skills";

export default function Home() {
  return (
    <main className="bg-white bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:20px_25px]">
      <div className="container overflow-hidden lg:px-28">
        <Hero />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
