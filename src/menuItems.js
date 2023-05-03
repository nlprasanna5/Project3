import { IoDocumentText } from "react-icons/io5"
import { AiFillFolderOpen } from "react-icons/ai"
import { BiHelpCircle, BiUndo, BiRedo, BiCut, BiImageAlt, BiPaint } from "react-icons/bi"
import { GrDownload } from "react-icons/gr"
import { SlGraduation } from "react-icons/sl"
import {
    MdDriveFileMoveOutline,
    MdDriveFileRenameOutline,
    MdContentCopy,
    MdFullscreen,
    MdOutlineTableChart,
    MdOutlineEmojiEmotions,
    MdOutlinePlaylistAdd,
    MdCellTower
} from "react-icons/md"

export const fileMenuItems = [
    {
        icon: <IoDocumentText />,
        text: "New"
    },
    {
        icon: <AiFillFolderOpen />,
        text: "Open"
    },
    {
        icon: <GrDownload />,
        text: "Download"
    },
    {
        icon: <MdDriveFileMoveOutline />,
        text: "Move"
    },
    {
        icon: <MdDriveFileRenameOutline />,
        text: "Rename"
    },

]

export const editMenuItems = [
    {
        icon: <BiUndo />,
        text: "Undo",
    },
    {
        icon: <BiRedo />,
        text: "Redo",
    },
    {
        icon: <BiCut />,
        text: "Cut",
    },
    {
        icon: <MdContentCopy />,
        text: "Copy",
    },
    {
        icon: <GrDownload />,
        text: "Paste",
    }
]

export const viewMenuItems = [
    {
        icon: <MdDriveFileRenameOutline />,
        text: "Mode",
    },
    {
        icon: <MdFullscreen />,
        text: "Full Screen",
    },
]

export const insertMenuItems = [
    {
        icon: <BiImageAlt />,
        text: "Image",
    },
    {
        icon: <MdOutlineTableChart />,
        text: "Table",
    },
    {
        icon: <BiPaint />,
        text: "Drawing",
    },
    {
        icon: <MdOutlineEmojiEmotions />,
        text: "Emoji",
    },
]

export const extensionMenuItems = [
    {
        icon: <MdOutlinePlaylistAdd />,
        text: "Add-ons"
    },
    {
        icon: <MdOutlinePlaylistAdd />,
        text: "Apps Script"
    }
]

export const helpMenuItems = [
    {
        icon: <BiHelpCircle />,
        text: "Help"
    },
    {
        icon: <SlGraduation />,
        text: "Training"
    },
    {
        icon: <MdCellTower />,
        text: "Updates"
    }

]