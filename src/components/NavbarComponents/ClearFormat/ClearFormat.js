


import style from '../Bold/Bold.module.css'
import FormatClearIcon from '@mui/icons-material/FormatClear';



function ClearFormat (){
   

    return (
        <>
        <div className={style.boldContainer}>
            <FormatClearIcon className={style.formatBold}/>
        </div>
        </>
    )
}

export default ClearFormat;