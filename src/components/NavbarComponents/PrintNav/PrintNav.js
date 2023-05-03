import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import style from '../UndoFormat/UndoFormat.module.css';
import { Tooltip } from '@mui/material';

function PrintNav() {
    return (
        <>
        <Tooltip title='Print'>
        <div className={style.undoContainer}>
            <PrintOutlinedIcon className={style.undoIcon}/>    
        </div>
        </Tooltip>
        
        </>
    )
}

export default PrintNav;
