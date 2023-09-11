import { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>Tired of boring lorem Ipsum</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          {" "}
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={crypto.randomUUID()}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
