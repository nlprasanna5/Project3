import {useRef} from "react"
import style from '../Bold/Bold.module.css';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Divider from '@mui/material/Divider';
import { Tooltip } from '@mui/material';


function InsertImage (){
    const inputImageRef = useRef(null)
    return (
        <>
        <Tooltip title='Insert image'>
        <div className={style.boldContainer}>
            <InsertPhotoOutlinedIcon onClick={() => inputImageRef.current.click()} className={style.formatBold}/>
            <input type="file" ref={inputImageRef} style={{display:"none"}}/>
        </div>
        </Tooltip>
        
        <div >
          <Divider orientation="vertical" variant="middle" sx={{ height: "65%",gap:'0.2rem' }} />
        </div> 
        </>
    )
}

export default InsertImage;