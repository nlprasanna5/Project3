
import MenuBar from "../../components/menubar/MenuBar";

import home from './Home.module.css';
import Containers from "../../components/textArea/Containers";
import { Icons } from "../../constData/Icons/Icons";
import { Tooltip } from "@mui/material";

function Home() {

    return (
        <>
            <MenuBar />
            <div className={home.mainNav}>
                <div className={home.navContainer}>
                   
                    {
                        Icons.map((icon, index) => (
                            <>
                                <Tooltip title={icon.text} key={index}>
                                    <div className={home.undoContainer} title='undo'>
                                        {icon.icon}
                                    </div>
                                </Tooltip>
                            </>
                        ))
                    }
                </div>
                <Containers />
            </div>
        </>
    )
}


export default Home;