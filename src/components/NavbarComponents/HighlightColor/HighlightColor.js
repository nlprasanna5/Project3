import style from '../Bold/Bold.module.css';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import Divider from '@mui/material/Divider';
import { Tooltip } from '@mui/material';

function HighlightColor (){
    return (
        <>
        <Tooltip title='Highlight color'>
        <div className={style.boldContainer}>
            <BrushOutlinedIcon className={style.formatBold}/>
        </div>
        </Tooltip>
        
        <div >
          <Divider orientation="vertical" variant="middle" sx={{ height: "65%",gap:'0.2rem' }} />
        </div> 
        </>
    )
}

export default HighlightColor;