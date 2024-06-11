import CoreConceptsSection from "./components/CoreConcepts/CoreConceptsSection.jsx";
import Header from "./components/Header/Header.jsx";
import TabButtonSection from "./components/TabButton/TabButtonSection.jsx";

function App() {
  console.log("Rendering App");

  return (
    <>
      <Header />
      <main>
        <CoreConceptsSection />
        <TabButtonSection />
      </main>
    </>
  );
}

export default App;
