import React, { useRef, useState } from 'react'
import style from "./menuBar.module.css"
import { Tooltip } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import BasicMenu from './Menu'
import {
    fileMenuItems,
    helpMenuItems,
    editMenuItems,
    viewMenuItems,
    insertMenuItems,
    formatMenuItems,
    extensionMenuItems
} from '../../menuItems'

const MenuBar = () => {
    const [docName, setDocName] = useState("Untitled Document")
    const [starred, setStarred] = useState(false)
    const docNameRef = useRef(null)


    function handleFocus(){
        docNameRef.current.focus()
    }

    return (
        <div className={style.menuBarContainer}>
            <div className={style.menuBar}>
                <Tooltip title="Docs home">
                    <h1><DescriptionIcon sx={{ color: '#4285F4', fontSize: "3rem" }} /></h1>
                </Tooltip>

                <div className={style.menuBarContent}>
                    <div className={style.menuBarContentTop}>
                        
                        <input type="text"
                            value={docName}
                            ref={docNameRef}
                            onChange={(e) => setDocName(e.target.value)} />

                        <Tooltip title="Star">
                            <p onClick={() => setStarred(!starred)}>
                                {starred ? <StarIcon sx={{ fontSize: "1.5rem", color: '#4285F4' }} /> : <StarOutlineIcon sx={{ fontSize: "1.5rem" }} />}
                            </p>
                        </Tooltip>
                        <Tooltip title="Move">
                            <p><DriveFileMoveOutlinedIcon sx={{ fontSize: "1.5rem" }} /></p>
                        </Tooltip>
                        <Tooltip title="See document status">
                            <p><CloudDoneOutlinedIcon sx={{ fontSize: "1.5rem" }} /></p>
                        </Tooltip>
                    </div>

                    <div className={style.menuBarContentBottom}>


                        <BasicMenu menuItems={fileMenuItems} label="File" className={style.file} onClick={handleFocus}/>
                        <BasicMenu menuItems={editMenuItems} label="Edit" className={style.edit} />
                        <BasicMenu menuItems={viewMenuItems} label="View" className={style.view} />
                        <BasicMenu menuItems={insertMenuItems} label="Insert" className={style.insert} />
                        <BasicMenu menuItems={formatMenuItems} label="Format" className={style.format} />
                        <BasicMenu menuItems={extensionMenuItems} label="Extensions" className={style.extension} />
                        <BasicMenu menuItems={helpMenuItems} label="Help" className={style.help} />
                    </div>
                </div>
            </div>
            <div className={style.menuBarSideOptions}>
                <Tooltip title="Open Comment History" >
                    <p><CommentOutlinedIcon sx={{ fontSize: "1.8rem" }} /></p>
                </Tooltip>
                <Tooltip title="Join a call here or present this tab to the call">
                    <p><VideocamOutlinedIcon sx={{ fontSize: "2.2rem" }} /></p>
                </Tooltip>

                <button>
                    <span className={style.shareBtn}> <LockOutlinedIcon sx={{ fontSize: "1.5rem" }} />Share</span>
                    <span className={style.shareIcon}><PersonAddAltOutlinedIcon /></span>
                </button>
                <p><AccountCircleOutlinedIcon sx={{ fontSize: "2.5rem" }} /></p>
            </div>
        </div>
    )
}

export default MenuBar
