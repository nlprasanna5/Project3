import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/NavbarComponents/navbar/Navbar";
import { useRef , useState} from "react";
import style from "./Home.module.css"


function Home() {
    const printDiv = useRef();
    // const [isFocused, setIsFocused] = useState(false);

    // const [selectedRange, setSelectedRange] = useState(null);


    // const handleBlur = () => {
    //     setIsFocused(true);
    //     const selection = window.getSelection();
    //     if (selection.rangeCount > 0) {
    //       setSelectedRange(selection.getRangeAt(0));
    //     }
    //   };
    
    //   const handleFocus = () => {
    //     setIsFocused(false);
    //     if (selectedRange) {
    //       const selection = window.getSelection();
    //       selection.removeAllRanges();
    //       selection.addRange(selectedRange);
    //     }
    //   };
    return (
        <>
            <MenuBar />
            <Navbar printDiv={printDiv} />


            <div className={style.contentContainer}>
            <div ref={printDiv} className={style.box} contentEditable="true" >
                  
            </div>
            </div>

           
        </>
    )

}

export default Home;
