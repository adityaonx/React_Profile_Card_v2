import myImage from "./images/Aditya_Sahu_Avatar.jpeg";
const list1 = [
  { skill: "HTML", level: "😎", color: "red" },
  { skill: "CSS", level: "😎", color: "yellow" },
  { skill: "Javascript", level: "😏", color: "lightgreen" },
  { skill: "React", level: "😅", color: "skyblue" },
  { skill: "Redux", level: "😢", color: "crimson" },
  { skill: "Django", level: "🫠", color: "pink" },
];
function App() {
  return (
    <div className="box">
      <Avatar></Avatar>
      <Intro></Intro>
      <SkillList></SkillList>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={myImage} alt="Avatar" />;
}
function Intro() {
  return (
    <div>
      <h2 className="name">Aditya Sahu</h2>
      <p className="intro">
        Dedicated and adaptable Front-End Developer with a proven track record
        of delivering high-quality web experiences. Seeking a Front-End
        Developer role to harness my expertise in coding and commitment to
        enhancing user interfaces, collaborating with clients to create
        engaging, user-centric websites and applications.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skilllist">
      {list1.map((i) => (
        <Skill skill={i.skill} level={i.level} color={i.color} />
      ))}
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.level}</span>
    </div>
  );
}
export default App;
