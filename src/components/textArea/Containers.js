import React, { useState, useEffect, useRef } from "react";

import style from "./Container.module.css";
import Home from "../../pages/Home/Home";


export function Containers() {
  const [content, setContent] = useState("<p></p>");
  const [selectedAction, setSelectedAction] = useState("p");
  const divRef = useRef();

  const handlePerformAction = (action) => {
    setSelectedAction(action);
  };

  useEffect(() => {
    const range = document.createRange();
    const target = divRef.current;

    range.selectNodeContents(target);

    range.collapse(false);
    const selection = window.getSelection();
    console.log(selection);
    selection.removeAllRanges();
    selection.addRange(range);
  }, [content]);

  const onChange = (event) => {
    setContent(
      `<${selectedAction}>${event.target.innerText}</${selectedAction}>`
    );
  };

  return (
    <>
    <Home onClick={handlePerformAction}/>
  <div
        ref={divRef}
        
        style={{ border: "2px solid grey", height: "5rem" }}
        contentEditable
        onKeyUp={onChange}
        dangerouslySetInnerHTML={{
          __html: content
        }}
      ></div>

      {/* <div className={style.box} contentEditable>

      </div> */}
    </>

  )
}

export default Containers
