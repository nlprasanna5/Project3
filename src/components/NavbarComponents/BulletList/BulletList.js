


import style from '../Bold/Bold.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Tooltip } from '@mui/material';


function BulletList (){
   

    return (
        <>
        <Tooltip title='Bulleted list'>
        <div className={style.boldContainer}>
            <FormatListBulletedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default BulletList;