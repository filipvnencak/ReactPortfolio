import Filip from "../imgs/IMG_1112.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  return (
    <>
      <section>
        <h1>Filip Vnenčák</h1>
        <img style={{ width: 250, borderRadius: 20 }} src={Filip} alt="Filip" />
        <h2>FrontEnd Developer</h2>
        <a
          className="icon"
          style={{ margin: 7 }}
          href="https://github.com/filipvnencak"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          className="icon"
          style={{ margin: 7 }}
          href="https://www.linkedin.com/in/filip-vnencak-224093118/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          className="icon"
          style={{ margin: 7 }}
          href="mailto: vnencak.filip@gmail.com"
        >
          <ContactMailIcon fontSize="large" />
        </a>
      </section>
    </>
  );
}
