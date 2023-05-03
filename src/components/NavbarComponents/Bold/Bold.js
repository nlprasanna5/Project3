import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import bold from './Bold.module.css';
import { Tooltip } from '@mui/material';

function Bold (){
    return (
        <>
        <Tooltip title='Bold'>
        <div className={bold.boldContainer}>
            <FormatBoldOutlinedIcon className={bold.formatBold}/>
        </div>
        </Tooltip>
       
        </>
    )
}

export default Bold;