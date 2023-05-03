import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import style from '../UndoFormat/UndoFormat.module.css';

function PrintNav() {
    return (
        <div className={style.undoContainer}>
            <PrintOutlinedIcon className={style.undoIcon}/>    
        </div>
    )
}

export default PrintNav;
