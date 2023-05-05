import React, { useState } from 'react'
import { ImFontSize, ImTextColor } from "react-icons/im";
function FontColor() {
    const [color, setColor] = useState("#000000");
    const handleFontColor = (e) => {
        setColor(e.target.value);
        console.log(e.target.value);
        document.execCommand("foreColor", false, e.target.value);
      };
  return (
    <div>
       <button>
            <label htmlFor="color">
              <ImTextColor style={{ color: color }} />
            </label>
            <input
              // className={style.input}
              id="color"
              type="color"
              value={color}
              onChange={handleFontColor}
            />
          </button>
    </div>
  )
}

export default FontColor
