import Counter from "./counter";
import SubjectList from "./SubjectList";
import TempConverter from "./TempConverter";
import WrongCounter from "./WrongCounter";

function App() {
  const CMSCSubjects = [
    { code: "CMSC100", description: "Web Programming", id: 1 },
    { code: "CMSC150", description: "Scientific Computation", id: 2 },
    { code: "CMSC22", description: "Object-Oriented Programming", id: 3 }
  ];
  return (
    <div className="App">
      <Counter value={0}/>
      <WrongCounter/>
      <SubjectList subjectList = {CMSCSubjects}/>
      <TempConverter />
    </div>
  );
}

export default App;
