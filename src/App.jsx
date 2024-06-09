import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

import { CORE_CONCEPTS } from "./assets/data.js";
import { EXAMPLES } from "./assets/data.js";
import { useState } from "react";

function App() {
  const [currentTopic, updateTopic] = useState();

  function handleSelect(selectedTopic) {
    updateTopic(selectedTopic);
    console.log("Selected : " + selectedTopic);
  }

  let tabContent = <p>Please click a tab.</p>;
  if (currentTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[currentTopic].title}</h3>
        <p>{EXAMPLES[currentTopic].description}</p>
        <pre>
          <code>{EXAMPLES[currentTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((item) => (
              <TabButton
                key={item.title}
                isSelected={currentTopic === item.title}
                onSelect={() => handleSelect(item.title.toLowerCase())}
              >
                {item.title}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
