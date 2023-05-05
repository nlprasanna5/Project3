import React, { useState } from 'react'
import {scaleList} from "../../../constData/Icons/Icons";
function HandleScale({printDiv}) {
    const [scaleSize, setScaleSize] = useState("100%");
    function handleScale(e) {
        setScaleSize(e.target.value);
        if (e.target.value === "100%") {
          printDiv.current.style.transform = "scale(1,1)";
        } else if (e.target.value === "150%") {
          printDiv.current.style.transform = "scale(1.5,1)";
        } else if (e.target.value === "200%") {
          printDiv.current.style.transform = "scale(2,1)";
        } else if (e.target.value === "50%") {
          printDiv.current.style.transform = "scale(0.65,0.65)";
        } else if (e.target.value === "25%") {
          printDiv.current.style.transform = "scale(0.5,0.5)";
        } else if (e.target.value === "75%") {
          printDiv.current.style.transform = "scale(0.8,1)";
        }
      }
  return (
    <div>
       <select
            // style={{ width: "100%" }}
            id="fontStyle"
            onChange={handleScale}
          >
            <option>{scaleSize}</option>
            {scaleList.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
    </div>
  )
}

export default HandleScale

