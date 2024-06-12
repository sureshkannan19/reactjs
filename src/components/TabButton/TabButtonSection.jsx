import TabButton from "./TabButton";
import Tabs from "./Tabs";
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
  /*<Tabs container="menu"> ==> 'menu' is in built-component type, 
    for custom created components {Menu} should be given*/
  return (
    <section id="examples">
      <h2>Examples</h2>
      <Tabs container="menu">
        {CORE_CONCEPTS.map((item) => (
          <TabButton
            key={item.title}
            isSelected={currentTopic === item.title}
            onClick={() => handleSelect(item.title.toLowerCase())}
          >
            {item.title}
          </TabButton>
        ))}
      </Tabs>
      {tabContent}
    </section>
  );
}
