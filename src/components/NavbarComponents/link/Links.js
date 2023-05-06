import React, { useState } from 'react'
import { BsLink } from "react-icons/bs";
import { Tooltip } from '@mui/material';
import style from '../../../pages/Home/Home.module.css'

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
      <Tooltip title='Insert link'>
      <button onClick={() => handleOpen("link")} style={{border:'transparent'}} className={style.undoContainer}>
            <label htmlFor="link">
              <BsLink style={{fontSize:'1.3rem'}} />
            </label>
          </button>
           </Tooltip>

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
