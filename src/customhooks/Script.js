import { useEffect } from "react";

function Script(props) {
  useEffect(() => {
    const script = document.createElement("script");

    // src, async, onload
    Object.assign(script, props);

    let { parent = "body" } = props;

    let parentNode = document.querySelector(parent);
    parentNode.appendChild(script);

    return () => {
      parentNode.removeChild(script);
    };
  });

  return null; // Return null is necessary for the moment.
}

export default Script;
