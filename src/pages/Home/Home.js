import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/NavbarComponents/navbar/Navbar";
import { useRef, useState } from "react";
// import style from "../../components/textArea/Container.module.css"
import style from "./Home.module.css";
import { HiDownload } from "react-icons/hi";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRecoilValue } from "recoil";
import { documentName } from "../../components/menubar/Atom";

function Home() {
  const printDiv = useRef();
  const title = useRecoilValue(documentName);

  async function handleDownload() {
    const sheetContent = document.getElementById(`print`);
    const width = sheetContent.offsetWidth;
    const height = sheetContent.offsetHeight;
    const canvas = await html2canvas(sheetContent, { dpi: 300, width, height });
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    const scaleFactor = 1.0;
    const imgWidth = 210;
    const imgHeight = (height * imgWidth) / width;
    pdfDoc.addImage(imageData, "PNG", 0, 0, imgWidth, imgHeight, "", "FAST");
    pdfDoc.save(`${title}.pdf`);
  }

  return (
    <>
      <MenuBar />
      <Navbar printDiv={printDiv} />

      <div className={style.contentContainer}>
        <div
          ref={printDiv}
          id="print"
          className={style.box}
          contentEditable="true"
        ></div>
        <div onClick={handleDownload} className={style.downloaddoc}>
          <HiDownload />
        </div>
      </div>
    </>
  );
}

export default Home;
