import ReactLogo from "./react.svg";
import "./index.scss"

const App = () => {
  return (
    <div className="container">
      <h1>React</h1>
      <img src={ReactLogo} width={200} height={200} />
      <ul>
        <li>SASS support</li>
        <li>SVG Images support</li>
        <li>Typescript support</li>
      </ul>
    </div>
  );
};

export default App;
