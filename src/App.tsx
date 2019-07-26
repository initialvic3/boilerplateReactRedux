import React from "react";
import SampleUserContainer from "./containers/SampleUserContainer";

//Adding routing here

const App: React.FC = () => {
  return (
    <div className="App">
      <header>This is a demo app</header>
      <SampleUserContainer prop1="it works!" />
    </div>
  );
};

export default App;
