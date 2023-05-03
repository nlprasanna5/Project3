import style from '../Bold/Bold.module.css';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import { Tooltip } from '@mui/material';

function TextColor (){
    return (
        <>
        <Tooltip title='Text color'>
        <div className={style.boldContainer}>
            <FormatColorTextOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
        
        </>
    )
}

export default TextColor;