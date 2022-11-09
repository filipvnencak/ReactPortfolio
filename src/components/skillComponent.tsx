import "../styles.css";
export default function Skill() {
  const imgsArray = [
    { img: require("../imgs/React.png"), level: "Beginer" },
    { img: require("../imgs/html.png"), level: "Advanced" },
    { img: require("../imgs/css.png"), level: "Advanced" },
    { img: require("../imgs/ionic.png"), level: "Beginer" },
    { img: require("../imgs/Angular.png"), level: "Beginer" },
    { img: require("../imgs/3D.png"), level: "Profesional" }
  ];
  return (
    <div className="scroll">
      <div className="skills">
        {imgsArray.map((image, index) => {
          return (
            <div key={index}>
              <p className="level">{image.level}</p>
              <div className="skill">
                <img src={image.img} alt="img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
