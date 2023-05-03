import style from '../Bold/Bold.module.css';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';

function Italic (){
    return (
        <>
        <div className={style.boldContainer}>
            <FormatItalicOutlinedIcon className={style.formatBold}/>
        </div>
        </>
    )
}

export default Italic;