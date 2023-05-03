import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';

import style from '../UndoFormat/UndoFormat.module.css';
import { Tooltip } from '@mui/material';

function SpellCheck() {
    return (
        <>
        <Tooltip title='Spelling check'>
        <div className={style.undoContainer}>
            <SpellcheckOutlinedIcon  className={style.undoIcon}/>
        </div>
        </Tooltip>
        
        </>
        
    )
}

export default SpellCheck;
