import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import bold from './Bold.module.css'

function Bold (){
    return (
        <>
        <div className={bold.boldContainer}>
            <FormatBoldOutlinedIcon className={bold.formatBold}/>
        </div>
        </>
    )
}

export default Bold;