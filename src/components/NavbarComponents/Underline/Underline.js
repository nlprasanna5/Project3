import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';

import style from '../Bold/Bold.module.css';

function Underline(){
    return (
        <>
        <div className={style.boldContainer}>
            <FormatUnderlinedOutlinedIcon  className={style.formatBold}/>
        </div>
        </>
    )
}

export default Underline;