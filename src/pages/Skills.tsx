import git from 'assets/png/git.png';
import sketch from 'assets/png/sketch.png';
import vscode from 'assets/png/vscode.png';

const Skills: React.FC<{}> = (): JSX.Element => (
  <div>
    <h1 className="page-title">skills</h1>
    <div>
      <div>
        {/* <h2>Tools I Use</h2> */}
        <h2>Инструменты, которые я использую</h2>
        <img src={sketch} alt="Sketch" height="150px" />
        <img src={git} alt="Git" height="150px" />
        <img src={vscode} alt="Visual Studio Code" height="150px" />
      </div>
    </div>
  </div>
);

export default Skills;
