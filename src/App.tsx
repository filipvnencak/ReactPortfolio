import "./styles.css";
import Skill from "./components/skillComponent";
import About from "./components/about";
import Text from "./components/textAboutMe";
import Jobs from "./components/jobs";
import Projects from "./components/projects";
export default function App() {
  return (
    <div className="App">
      <About />
      <Skill />
      <Text />
      <Jobs />
      <Projects />
    </div>
  );
}
