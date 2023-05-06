import React from "react";
import { BiPrinter } from "react-icons/bi";
import { Tooltip } from "@mui/material";
import style from "../../../pages/Home/Home.module.css";

function Printer({ printDiv }) {
  const handlePrint = () => {
    alert("print");
    let contents = printDiv.current.innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = contents;
    window.print();
    document.body.innerHTML = originalContents;

    // let contents = printDiv.current.innerHTML;
    // let iframe = document.createElement("iframe");
    // iframe.setAttribute(
    //   "style",
    //   "position:absolute;width:0px;height:0px;left:-500px;top:-500px;"
    // );
    // document.body.appendChild(iframe);
    // let doc = iframe.contentWindow.document;
    // let printContents = document.createElement("div");
    // printContents.innerHTML = contents;
    // doc.body.appendChild(printContents);
    // iframe.contentWindow.print();
    // document.body.removeChild(iframe);
  };


  return (
    <div>
      {/* <Tooltip title='Print'> */}
      <button
        onClick={handlePrint}
        style={{ border: "transparent" }}
        className={style.undoContainer}
      >
        <BiPrinter style={{ fontSize: "1.2rem" }} />
      </button>
      {/* </Tooltip> */}

    </div>
  );
}

export default Printer;
