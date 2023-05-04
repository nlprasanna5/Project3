
import style from '../Bold/Bold.module.css'
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import { Tooltip } from '@mui/material';

function IncreaseIndent (){
   

    return (
        <>
        <Tooltip title='Increase indent'>
        <div className={style.boldContainer}>
            <FormatIndentIncreaseIcon className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default IncreaseIndent;