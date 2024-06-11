import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../assets/data.js";

export default function CoreConceptsSection() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}
