import style from '../Bold/Bold.module.css';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import { Tooltip } from '@mui/material';

function InsertLink (){
    return (
        <>
        <Tooltip title='Insert link'>
        <div className={style.boldContainer}>
            <LinkOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default InsertLink;