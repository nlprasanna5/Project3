import UndoIcon from '@mui/icons-material/Undo';
import style from './UndoFormat.module.css';
import { Tooltip } from '@mui/material'

function UndoFormat() {
    return (
        <>
            <Tooltip title="undo">
            <div className={style.undoContainer} title='undo'>
                <UndoIcon className={style.undoIcon} />
            </div>
            </Tooltip>
            
        </>
    )
}

export default UndoFormat;
