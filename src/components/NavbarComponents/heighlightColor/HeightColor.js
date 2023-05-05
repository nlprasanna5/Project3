import React, { useState } from 'react';
import { AiOutlineHighlight } from "react-icons/ai";

function HeightColor() {
    const [higlightColor, setHeighlightColor] = useState("#000000");
  const handleHighlightColor = (e) => {
    setHeighlightColor(e.target.value);
    console.log(e.target.value);
    document.execCommand("backColor", false, e.target.value);
  };
  return (
    <div>
       <button>
            <label htmlFor="highlighColor">
              <AiOutlineHighlight
                style={{ zIndex: "1", color: higlightColor }}
              />
            </label>
            <input
              // className={style.input}
              id="highlighColor"
              type="color"
              value={higlightColor}
              onChange={handleHighlightColor}
            />
          </button>
    </div>
  )
}

export default HeightColor
