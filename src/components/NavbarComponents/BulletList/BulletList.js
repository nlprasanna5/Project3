


import style from '../Bold/Bold.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';



function BulletList (){
   

    return (
        <>
        <div className={style.boldContainer}>
            <FormatListBulletedIcon className={style.formatBold}/>
        </div>
        </>
    )
}

export default BulletList;