import * as React from 'react';
import style from '../Bold/Bold.module.css';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import { Tooltip } from '@mui/material';
import { CompactPicker } from 'react-color';

function HighlightColor (){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <Tooltip title='Highlight color'>
        <div className={style.boldContainer}>
            <p
                 id="basic-button"
                 aria-controls={open ? 'basic-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick}
            > <BrushOutlinedIcon className={style.formatBold}/></p>

            
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
             <CompactPicker/>  
            </Menu>
           
        </div>
        </Tooltip>
        
        <div >
          <Divider orientation="vertical" variant="middle" sx={{ height: "65%",gap:'0.2rem' }} />
        </div> 
        </>
    )
}

export default HighlightColor;