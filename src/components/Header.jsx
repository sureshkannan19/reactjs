import reactImg from "../assets/react-core-concepts.png";

export default function Header() {
  const descriptions = ["Crucial", "Core", "Fundamental"];
  const genRandomIndex = () => Math.floor(Math.random() * descriptions.length);

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions[genRandomIndex()]} React concepts youl̥ will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
