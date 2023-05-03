import style from '../Bold/Bold.module.css';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Divider from '@mui/material/Divider';
import { Tooltip } from '@mui/material';


function InsertImage (){
    return (
        <>
        <Tooltip title='Insert image'>
        <div className={style.boldContainer}>
            <InsertPhotoOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
        
        <div >
          <Divider orientation="vertical" variant="middle" sx={{ height: "65%",gap:'0.2rem' }} />
        </div> 
        </>
    )
}

export default InsertImage;