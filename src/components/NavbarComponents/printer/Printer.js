import React from 'react'
import { BiPrinter } from "react-icons/bi";

function Printer({printDiv}) {
    const handlePrint = () => {
        let contents = printDiv.current.innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = contents;
        window.print();
        document.body.innerHTML = originalContents;
        console.log(originalContents);
      };
    
  return (
    <div>
        <button onClick={handlePrint}>
            <BiPrinter />
          </button>
    </div>
  )
}

export default Printer
