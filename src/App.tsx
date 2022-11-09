import "./styles.css";
import Skill from "./components/skillComponent";
import About from "./components/about";
export default function App() {
  return (
    <div className="App">
      <section>
        <About />
      </section>
      <section>
        <Skill />
      </section>
      <section>
        <p className="text">
          I love simplicity. I like learning. My passion is jogging, climbing,
          mountains and I like reading. <br />
          <small>
            P.S.: If you've read the book Surrounded by idiots, I'm yellow.
          </small>
        </p>
      </section>
    </div>
  );
}
