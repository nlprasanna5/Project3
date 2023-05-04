import RedoIcon from '@mui/icons-material/Redo';

import style from '../UndoFormat/UndoFormat.module.css';
import { Tooltip } from '@mui/material';

function RedoFormat() {
    

    return (
        <>
        <Tooltip title='Redo'>
        <div className={style.undoContainer}>  
            <RedoIcon className={style.undoIcon} />  
        </div>
        </Tooltip>
        
        </>
    )
}

export default RedoFormat;
