
import style from '../Bold/Bold.module.css'
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';



function DecreaseIndent (){
   

    return (
        <>
        <div className={style.boldContainer}>
            <FormatIndentDecreaseIcon className={style.formatBold}/>
        </div>
        </>
    )
}

export default DecreaseIndent;