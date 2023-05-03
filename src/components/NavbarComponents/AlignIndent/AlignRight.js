


import style from '../Bold/Bold.module.css'
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import { Tooltip } from '@mui/material';


function AlignRight (){
   

    return (
        <>
        <Tooltip title='Right align'>
        <div className={style.boldContainer}>
            <FormatAlignRightOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default AlignRight;