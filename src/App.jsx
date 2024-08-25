import About from "./About";
import Hero from "./Hero";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <section className="w-full px-24 pt-5 max-sm:px-5 bg-bg-color">
        <NavBar />
      </section>
      <section className="px-24 w-full max-sm:px-5 bg-bg-color">
        <Hero />
      </section>
      <section className="px-24 w-full bg-bg-color ">
        <About />
      </section>
    </>
  );
}

export default App;
