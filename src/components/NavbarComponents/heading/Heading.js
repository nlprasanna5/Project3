import React, { useState } from 'react'
import {headingList } from "../../../constData/Icons/Icons";
function Heading() {
    const [text, setText] = useState("");
 
    const handleText = (value) => {
        setText(value);
        document.execCommand("formatBlock", false, value);
        //     const selection = window.getSelection();
        //   if (selection.rangeCount > 0) {
        //     const range = selection.getRangeAt(0);
        //     const selectedText = range.toString();
        //     const span = document.createElement("span");
        //     span.innerHTML = selectedText;
        //     range.deleteContents();
        //     range.insertNode(span);
        //     document.execCommand("formatBlock", false, value);
      };
    
  return (
    <div>
      
      <select onChange={(e) => handleText(e.target.value)}>
            <option value="">Normal Text</option>
            {headingList.map((x, i) => (
              <option value={x.value} key={i}>
                {x.icon}
              </option>
            ))}
          </select>
    </div>
  )
}

export default Heading
