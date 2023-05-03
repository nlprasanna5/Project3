
import style from '../Bold/Bold.module.css'
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';


function IncreaseIndent (){
   

    return (
        <>
        <div className={style.boldContainer}>
            <FormatIndentIncreaseIcon className={style.formatBold}/>
        </div>
        </>
    )
}

export default IncreaseIndent;