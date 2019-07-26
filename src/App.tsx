import React from "react";
import SampleContainer from "./containers/SampleContainer";

//Adding routing here

const App: React.FC = () => {
  return (
    <div className="App">
      <header>This is a demo app</header>
      <SampleContainer prop1="it works!" />
    </div>
  );
};

export default App;
