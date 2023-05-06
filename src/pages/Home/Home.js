import MenuBar from "../../components/menubar/MenuBar";
import Navbar from "../../components/NavbarComponents/navbar/Navbar";
import { useRef } from "react";
// import style from "../../components/textArea/Container.module.css"
import style from './Home.module.css';

function Home() {
    const printDiv = useRef();
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
