import { TextField } from '@mui/material'
import React from 'react'
import style from "./dialogBox.module.css"
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const ShareDialogBox = ({docName}) => {
  return (
    <div className={style.dialogContainer}>
        <div className={style.dialogHeading}>
             <h2>Share "{docName}"</h2> 
             <HelpOutlineOutlinedIcon/>
        </div>
     
      <TextField sx={{width:"100%"}} placeholder='Add people and groups'/>
      <h4>People with access</h4>
      <div className={style.owner}> <p><AccountCircleOutlinedIcon/> You</p> <p>Owner</p></div>
      <h4>General access</h4>
      <div><LockOutlinedIcon/> / select from mui</div>
      <div className={style.btnContainer}>
      <button className={style.copyBtn}><LinkOutlinedIcon/> <strong>Copy Link</strong></button>
      <button className={style.doneBtn}><strong>Done</strong></button>
      </div>
     
    </div>
  )
}

export default ShareDialogBox
