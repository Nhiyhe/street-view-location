import { useStreetViewPanorama } from "@vis.gl/react-google-maps";
import { useEffect } from "react";

const useManageStreetView = (
  divContainer: HTMLDivElement | null,
  heading: number,
  pitch: number,
  onPovStateUpdate?: (heading: number) => void
) => {
  const position = { lat: 41.8897533, lng: 12.491388 };
  const panorama = useStreetViewPanorama({
    divElement: divContainer,
    position,
    pov: { heading, pitch },
  });

  useEffect(() => {
    if (panorama) {
      panorama.setPov({ heading, pitch });
    }
  }, [heading, pitch, panorama]);

  useEffect(() => {
    if (panorama) {
      const listener = panorama.addListener("pov_changed", () => {
        if (onPovStateUpdate) {
          onPovStateUpdate(panorama.getPov().heading);
        }
      });

      return () => {
        window.google.maps.event.removeListener(listener);
      };
    }
  }, [panorama, onPovStateUpdate]);
};

export default useManageStreetView;
