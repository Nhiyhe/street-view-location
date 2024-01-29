import { useCallback, useState } from "react";
import useManageStreetView from "../hooks/useManageStreetView";

interface Props {
  pitch: number;
  onPovStateUpdate?: (heading: number) => void;
  heading: number;
}

const StreetView = ({ pitch, onPovStateUpdate, heading }: Props) => {
  const [divContainer, setDivContainer] = useState<HTMLDivElement | null>(null);
  const divRef = useCallback((node: HTMLDivElement | null) => {
    setDivContainer(node);
  }, []);

  useManageStreetView(divContainer, heading, pitch, onPovStateUpdate);

  return <div ref={divRef} style={{ width: "30%", height: "30vh" }} />;
};

export default StreetView;
