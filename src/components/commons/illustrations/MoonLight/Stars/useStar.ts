import { useContext } from "react";
import MoonLightContext from "../MoonLightContext";

function useStar() {
  const { width, height } = useContext(MoonLightContext);

  const x = Math.random() * (width as number);
  const y = Math.random() * (height as number) - 200;

  return {
    x,
    y,
  };
}

export default useStar;
