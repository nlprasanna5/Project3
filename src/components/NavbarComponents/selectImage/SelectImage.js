import React, { useRef } from "react";
import { RxImage } from "react-icons/rx";
function SelectImage() {
  let inputRef = useRef();
  function handleImageOpen() {
    inputRef.current.click();
  }
 

  function image(e) {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      let imgUrl = URL.createObjectURL(e.target.files[0]);
      let img = document.createElement("img");
      img.style.maxWidth = "90%"; 
      img.style.maxHeight = "90%"; 
      img.src = imgUrl;
      document.execCommand("insertHTML", false, img.outerHTML);
    }
  }
  return (
    <div style={{ maxWidth: "200px", maxHeight: "200px" }}>
      <button>
        <label htmlFor="link">
          <RxImage onClick={handleImageOpen} />
        </label>
      </button>
      <input ref={inputRef} hidden onChange={image} type="file" />
    </div>
  );
}

export default SelectImage;
