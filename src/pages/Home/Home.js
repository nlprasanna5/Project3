
import MenuBar from "../../components/menubar/MenuBar";

import home from './Home.module.css';
import Containers from "../../components/textArea/Containers";
import { Icons } from "../../constData/Icons/Icons";
import { Tooltip } from "@mui/material";
import Navbar from "../../components/NavbarComponents/navbar/Navbar";
import { useRef } from "react";
import style from "../../components/textArea/Container.module.css"

function Home() {
    const printDiv = useRef();
    return (
        <>
            <MenuBar />
            {/* <div className={home.mainNav}>
                <div className={home.navContainer}>
                   
                    {
                        Icons.slice(0, 5).map((icon, index) => (
                            <>
                                <Tooltip title={icon.text} key={index}>
                                    <div onClick={()=>handleIcons(icon)} className={home.undoContainer} title='undo'>
                                        {icon.icon}
                                    </div>
                                </Tooltip>
                            </>
                        ))
                    }
                </div>
               
               
            </div> */}

            <Navbar printDiv={printDiv}/>
            <div  ref={printDiv}  className={style.box} contentEditable="true" >
    
    </div> 
        </>
    )
}


export default Home;