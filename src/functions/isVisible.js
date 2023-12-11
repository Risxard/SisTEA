import { useState } from "react";


const [isVisible, setIsVisible] = useState(false);

export const isVisibleHandle = () => {
  switch (isVisible) {
    case false:
      setIsVisible(true);
      break;
    case true:
      setIsVisible(false);
      break;
    default:
      setIsVisible(false);
  }
};