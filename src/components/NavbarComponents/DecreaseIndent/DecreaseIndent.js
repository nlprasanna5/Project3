
import style from '../Bold/Bold.module.css'
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import { Tooltip } from '@mui/material';


function DecreaseIndent (){
   

    return (
        <>
        <Tooltip title='Decrease indent'>
        <div className={style.boldContainer}>
            <FormatIndentDecreaseIcon className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default DecreaseIndent;