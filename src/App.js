import {
  Contact,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Team,
  Testimonials
} from "./components";

function App() {
  return (
    <div className="w-screen h-auto min-h-[100vh] flex flex-col bg-primary">
      <Navbar />
      <main className={`w-screen h-auto overflow-hidden`}>
        <Hero />
        <Team />
        <Pricing />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
