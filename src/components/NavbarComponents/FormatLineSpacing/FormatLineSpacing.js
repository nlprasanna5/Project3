


import style from '../Bold/Bold.module.css'
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import { Tooltip } from '@mui/material';

function FormatLineSpacing (){
   

    return (
        <>
        <Tooltip title='Line & paragraph spacing'>
        <div className={style.boldContainer}>
            <FormatLineSpacingIcon className={style.formatBold}/>
        </div>
        </Tooltip>
        
        </>
    )
}

export default FormatLineSpacing;