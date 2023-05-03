import style from '../Bold/Bold.module.css';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';

function TextColor (){
    return (
        <>
        <div className={style.boldContainer}>
            <FormatColorTextOutlinedIcon className={style.formatBold}/>
        </div>
        </>
    )
}

export default TextColor;