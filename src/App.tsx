import { useState } from "react";
import StreetView from "./components/StreetView";
import CustomAPIProvider from "./components/CustomAPIProvider";

function App() {
  const [heading, setHeading] = useState(0);

  const handlePovStateChange = (heading: number) => {
    setHeading(heading);
  };

  return (
    <CustomAPIProvider>
      <StreetView pitch={-90} heading={heading} />
      <StreetView
        pitch={0}
        heading={75.22}
        onPovStateUpdate={handlePovStateChange}
      />
      <StreetView pitch={90} heading={heading} />
    </CustomAPIProvider>
  );
}

export default App;
