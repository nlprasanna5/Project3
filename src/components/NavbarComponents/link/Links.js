import React, { useState } from 'react'
import { BsLink } from "react-icons/bs";


function Links() {
    const [link, setLink] = useState("");
   
    const [show, setShow] = useState();
    function handleOpen(value) {
        setShow(!show ? true : false);
        if (value === "link") {
          document.execCommand("createLink", false, link);
        }
        setLink("");
      }
  return (
    <div>
       <button onClick={() => handleOpen("link")}>
            <label htmlFor="link">
              <BsLink />
            </label>
          </button>

          {show ? (
            <div>
              <h4>Paste your Link Here....</h4>

              <input
                id="link"
                value={link}
                type="url"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          ) : (
            ""
          )}

    </div>
  )
}

export default Links
