import style from '../Bold/Bold.module.css';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import { Tooltip } from '@mui/material';

function Italic (){
    return (
        <>
        <Tooltip title='Italic'>
        <div className={style.boldContainer}>
            <FormatItalicOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default Italic;