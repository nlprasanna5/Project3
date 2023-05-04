import React, { useState } from 'react'
import style from "./menuBar.module.css"
import { Tooltip } from '@mui/material'
import { IoDocumentText } from "react-icons/io5"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { MdDriveFileMoveOutline, MdOutlineInsertComment } from "react-icons/md"
import { SiGooglemeet } from "react-icons/si"
import { TbLock } from "react-icons/tb"
import { CgProfile } from "react-icons/cg"
import { BsCloudCheck } from "react-icons/bs"
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

    return (
        <div className={style.menuBarContainer}>
            <div className={style.menuBar}>
                <Tooltip title="Docs home">
                    <h1><IoDocumentText color='#4285F4' size={40} /></h1>
                </Tooltip>
                
                <div className={style.menuBarContent}>
                    <div className={style.menuBarContentTop}>
                        <input type="text"
                            value={docName}
                            onChange={(e) => setDocName(e.target.value)} />
                        <Tooltip title="Star">
                            <p onClick={() => setStarred(!starred)}>
                                {starred ? <AiFillStar size={20} color='#4285F4' /> : <AiOutlineStar size={20} />}
                            </p>
                        </Tooltip>
                        <Tooltip title="Move">
                            <p><MdDriveFileMoveOutline size={20} /></p>
                        </Tooltip>
                        <Tooltip title="See document status">
                            <p><BsCloudCheck size={20} /></p>
                        </Tooltip>
                    </div>

                    <div className={style.menuBarContentBottom}>
                        <BasicMenu menuItems={fileMenuItems} label="File" />
                        <BasicMenu menuItems={editMenuItems} label="Edit" />
                        <BasicMenu menuItems={viewMenuItems} label="View" />
                        <BasicMenu menuItems={insertMenuItems} label="Insert" />
                        <BasicMenu menuItems={formatMenuItems} label="Format" />
                        <BasicMenu menuItems={extensionMenuItems} label="Extensions" />
                        <BasicMenu menuItems={helpMenuItems} label="Help" />
                    </div>
                </div>
            </div>
            <div className={style.menuBarSideOptions}>
                <Tooltip title="Open Comment History" >
                    <p><MdOutlineInsertComment size={25} /></p>
                </Tooltip>
                <Tooltip title="Join a call here or present this tab to the call">
                    <p><SiGooglemeet size={25} /></p>
                </Tooltip>

                <button> <TbLock size={20} />Share</button>
                <p><CgProfile size={35} /></p>
            </div>
        </div>
    )
}

export default MenuBar
