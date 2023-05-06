
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';



export const Icons = [
    {
        icon: <UndoIcon />,
        text: 'undo',
        action: "undo",
    },
    {
        icon: <RedoIcon />,
        text: 'redo',
        action: "redo",
    },
    {
        icon: <FormatBoldOutlinedIcon />,
        text: 'bold',
        action: "bold",
    },
    {
        icon: <FormatItalicOutlinedIcon />,
        text: 'italic',
        action: "italic",
    },
    {
        icon: <FormatUnderlinedOutlinedIcon />,
        text: 'underline',
        action: "underline",
    },
    {
        icon: <FormatAlignLeftOutlinedIcon />,
        text: 'align left',
        action: "justifyLeft",
    },
    {
        icon: <FormatAlignCenterOutlinedIcon />,
        text: 'align center',
        action: "justifyCenter",
    },
    {
        icon: <FormatAlignRightOutlinedIcon />,
        text: 'align right',
        action: "justifyRight",
    },
    {
        icon: <FormatAlignJustifyOutlinedIcon />,
        text: 'justify',
        action: "justifyFull",
    },
    
    {
        icon: <FormatListBulletedIcon />,
        text: 'bulleted list',
        action: "insertUnorderedList",
    },
    {
        icon: <FormatListNumberedIcon />,
        text: 'numbered list',
       
        action: "insertOrderedList",
    },
    {
        icon: <FormatIndentDecreaseIcon />,
        text: 'decrease indent',
        action: "outdent",
    },
    {
        icon: <FormatIndentIncreaseIcon />,
        text: 'increase indent',
        action: "indent",
    },
    
    {
        icon: <FormatClearIcon />,
        text: 'clear format',
        action: "removeFormat",
    },


]

export const scaleList = [
   "100%", "150%" , "200%" ,"75%", "50%" , "25%"
  ]

  
export const headingList = [
    {
      icon : "Heading 1",
      value : "H1",
    } ,
    {
      icon : "Heading 2",
      value : "H2",
    } ,
    {
      icon : "Heading 3",
      value : "H3",
    } ,
    {
      icon : "Heading 4",
      value : "H4",
    } ,
    {
      icon : "Heading 5",
      value : "H5",
    } ,
    {
      icon : "Heading 6",
      value : "H6",
    } 
    
  ];