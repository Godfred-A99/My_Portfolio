import Hero from "./Hero";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <section className="w-full px-20 pt-5 max-sm:px-5 bg-slate-600">
        <NavBar />
      </section>
      <section className="px-20 max-sm:px-5 bg-slate-600">
        <Hero />
      </section>
    </>
  );
}

export default App;
