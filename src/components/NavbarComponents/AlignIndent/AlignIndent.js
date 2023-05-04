


import style from '../Bold/Bold.module.css'
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import { Tooltip } from '@mui/material';


function AlignIndent (){
   

    return (
        <>
        <Tooltip title='Left align'>
        <div className={style.boldContainer}>
            <FormatAlignLeftOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
        
        </>
    )
}

export default AlignIndent;