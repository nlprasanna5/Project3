import style from '../Bold/Bold.module.css';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

function InsertLink (){
    return (
        <>
        <div className={style.boldContainer}>
            <LinkOutlinedIcon className={style.formatBold}/>
        </div>
        </>
    )
}

export default InsertLink;