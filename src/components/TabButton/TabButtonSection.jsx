import TabButton from "./TabButton";
import { useState } from "react";

import { CORE_CONCEPTS } from "../../assets/data";
import { EXAMPLES } from "../../assets/data";

export default function TabButtonSection() {
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
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {CORE_CONCEPTS.map((item) => (
          <TabButton
            key={item.title}
            isSelected={currentTopic === item.title}
            onClick={() => handleSelect(item.title.toLowerCase())}
          >
            {item.title}
          </TabButton>
        ))}
      </menu>
      {tabContent}
    </section>
  );
}
