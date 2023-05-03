import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';

import style from '../UndoFormat/UndoFormat.module.css';

function SpellCheck() {
    return (
        <div className={style.undoContainer}>
            <SpellcheckOutlinedIcon  className={style.undoIcon}/>
        </div>
    )
}

export default SpellCheck;
