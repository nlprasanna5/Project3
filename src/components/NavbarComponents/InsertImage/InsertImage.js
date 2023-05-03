import style from '../Bold/Bold.module.css';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Divider from '@mui/material/Divider';


function InsertImage (){
    return (
        <>
        <div className={style.boldContainer}>
            <InsertPhotoOutlinedIcon className={style.formatBold}/>
        </div>
        <div >
          <Divider orientation="vertical" variant="middle" sx={{ height: "65%",gap:'0.2rem' }} />
        </div> 
        </>
    )
}

export default InsertImage;