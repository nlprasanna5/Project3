


import style from '../Bold/Bold.module.css'
import { Tooltip } from '@mui/material';

import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';

function AlignJustify (){
   

    return (
        <>
        <Tooltip title='Justify'>
        <div className={style.boldContainer}>
            <FormatAlignJustifyOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default AlignJustify;