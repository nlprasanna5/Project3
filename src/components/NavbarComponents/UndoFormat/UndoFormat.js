import UndoIcon from '@mui/icons-material/Undo';
import style from './UndoFormat.module.css';

function UndoFormat() {
    return (
        <div className={style.undoContainer} title='undo'>
            <UndoIcon  className={style.undoIcon}/>
            
        </div>
    )
}

export default UndoFormat;
