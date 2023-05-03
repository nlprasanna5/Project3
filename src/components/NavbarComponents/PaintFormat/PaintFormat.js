import ImagesearchRollerOutlinedIcon from '@mui/icons-material/ImagesearchRollerOutlined';
import style from '../UndoFormat/UndoFormat.module.css';


function PaintFormat() {
    return (
        <>
        <div className={style.undoContainer}>
            <ImagesearchRollerOutlinedIcon className={style.undoIcon}/>    
        </div>
        
        </>
    )
}

export default PaintFormat;
