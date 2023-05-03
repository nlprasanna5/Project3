


import style from '../Bold/Bold.module.css'

import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
// FiAlignCenter
// import { FiAlignCenter } from "react-icons/fi";


function AlignCenter (){
   

    return (
        <>
        <div className={style.boldContainer}>
            <FormatAlignCenterOutlinedIcon className={style.formatBold}/>
            {/* <FiAlignCenter className={style.formatBold}/> */}
        </div>
        </>
    )
}

export default AlignCenter;