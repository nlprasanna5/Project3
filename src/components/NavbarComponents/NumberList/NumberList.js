


import style from '../Bold/Bold.module.css'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import { Tooltip } from '@mui/material';


function NumberList (){
   

    return (
        <>
        <Tooltip title='Numbered list'>
        <div className={style.boldContainer}>
            <FormatListNumberedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default NumberList;