import React from 'react'
import { BiPrinter } from "react-icons/bi";
import { Tooltip } from '@mui/material';
import style from '../../../pages/Home/Home.module.css'

function Printer({printDiv}) {
    const handlePrint = () => {
        let contents = printDiv.current.innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = contents;
        window.print();
        document.body.innerHTML = originalContents;
        
      };
    
  return (
    <div >
      <Tooltip title='Print'>
      <button onClick={handlePrint} style={{border:'transparent'}} className={style.undoContainer}  >
            <BiPrinter style={{fontSize:'1.2rem'}} />
          </button>
      </Tooltip>
        
    </div>
  )
}

export default Printer
