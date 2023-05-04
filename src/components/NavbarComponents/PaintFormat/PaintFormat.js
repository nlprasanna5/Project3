import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
import style from '../UndoFormat/UndoFormat.module.css';
import { Tooltip } from '@mui/material';

function PaintFormat() {
    return (
        <>
        <Tooltip title='Paint format'>
        <div className={style.undoContainer}>
            <ImagesearchRollerOutlinedIcon className={style.undoIcon}/>    
        </div>
        </Tooltip>
       
        
        </>
    )
}

export default PaintFormat;
