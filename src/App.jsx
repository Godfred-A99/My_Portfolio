import Hero from "./Hero";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <section className="w-full px-24 pt-5 max-sm:px-5 bg-bg-color">
        <NavBar />
      </section>
      <section className="px-24 max-sm:px-5 bg-bg-color">
        <Hero />
      </section>
    </>
  );
}

export default App;
