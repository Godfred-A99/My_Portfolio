import About from "./About";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Projects from "./Projects";

function App() {
  return (
    <>
      <section className="w-full px-32 pt-5 max-sm:px-5 bg-bg-color">
        <NavBar />
      </section>
      <section className="px-32 w-full max-sm:px-5 bg-bg-color">
        <Hero />
      </section>
      <section className="px-32 w-full bg-bg-color ">
        <About />
      </section>
      <section className="px-32 w-full bg-bg-color1">
        <Projects />
      </section>
    </>
  );
}

export default App;
