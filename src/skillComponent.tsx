import "./styles.css";
export default function Skill(props: {
  img: string;
  index: number;
  level: string;
}) {
  return (
    <div key={props.index}>
      <p className="level">{props.level}</p>
      <div className="skill">
        <img src={props.img} alt="img" />
      </div>
    </div>
  );
}
