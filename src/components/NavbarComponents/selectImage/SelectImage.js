import React, { useRef } from 'react'
import { RxImage } from "react-icons/rx";
function SelectImage() {
    let inputRef=useRef();
    function handleImageOpen() {
        inputRef.current.click();
      }
      function image(e) {
        console.log(e.target.files[0]);
        if (e.target.files[0]) {
          document.execCommand(
            "insertImage",
            "",
            URL.createObjectURL(e.target.files[0])
          );
        }
      }
  return (
    <div>
      <button>
            <label htmlFor="link">
              <RxImage onClick={handleImageOpen} />
            </label>
          </button>
          <input ref={inputRef} hidden onChange={image} type="file" />
    </div>
  )
}

export default SelectImage
