


import style from '../Bold/Bold.module.css'
import FormatClearIcon from '@mui/icons-material/FormatClear';
import { Tooltip } from '@mui/material';


function ClearFormat (){
   

    return (
        <>
        <Tooltip title='Clear formatting'>
        <div className={style.boldContainer}>
            <FormatClearIcon className={style.formatBold}/>
        </div>
        </Tooltip>
        
        </>
    )
}

export default ClearFormat;