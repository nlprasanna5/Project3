
import style from '../Bold/Bold.module.css'
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import { Tooltip } from '@mui/material';

function AlignCenter (){
    return (
        <>
        <Tooltip title='Center align'>
        <div className={style.boldContainer}>
            <FormatAlignCenterOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
        
        </>
    )
}

export default AlignCenter;