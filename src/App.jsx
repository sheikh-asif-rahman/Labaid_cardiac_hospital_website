import React, { useState } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App;
