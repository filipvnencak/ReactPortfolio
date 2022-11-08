import "./styles.css";
import Filip from "./imgs/IMG_1112.jpg";
import Skill from "./skillComponent";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function App() {
  const imgsArray = [
    { img: require("./imgs/React.png"), level: "Beginer" },
    { img: require("./imgs/html.png"), level: "Advanced" },
    { img: require("./imgs/css.png"), level: "Advanced" },
    { img: require("./imgs/ionic.png"), level: "Beginer" },
    { img: require("./imgs/Angular.png"), level: "Beginer" },
    { img: require("./imgs/3D.png"), level: "Profesional" }
  ];

  return (
    <div className="App">
      <section>
        <h1>Filip Vnenčák</h1>
        <img style={{ width: 250, borderRadius: 20 }} src={Filip} alt="Filip" />
        <h2>FrontEnd Developer</h2>
        <a
          style={{ margin: 7 }}
          href="https://github.com/filipvnencak"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          style={{ margin: 7 }}
          href="https://www.linkedin.com/in/filip-vnencak-224093118/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a style={{ margin: 7 }} href="mailto: vnencak.filip@gmail.com">
          <ContactMailIcon fontSize="large" />
        </a>
      </section>
      <section className="scroll">
        <div className="skills">
          {imgsArray.map((image, index) => {
            return <Skill img={image.img} index={index} level={image.level} />;
          })}
        </div>
      </section>
    </div>
  );
}
