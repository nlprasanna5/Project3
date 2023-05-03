import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';

import style from '../Bold/Bold.module.css';
import { Tooltip } from '@mui/material';

function Underline(){
    return (
        <>
        <Tooltip title='Underline'>
        <div className={style.boldContainer}>
            <FormatUnderlinedOutlinedIcon  className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default Underline;