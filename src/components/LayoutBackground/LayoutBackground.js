import { createPortal } from "react-dom";

const rootBackground = document.getElementById("bg-root");

function LayoutBackground({ children }) {
  return createPortal(children, rootBackground);
}

export default LayoutBackground;
