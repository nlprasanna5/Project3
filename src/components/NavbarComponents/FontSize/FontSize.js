import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import style from './FontSize.module.css';
import Divider from '@mui/material/Divider';
import { Tooltip } from '@mui/material';
import { useState } from 'react';


function FontSize() {
    let [fontSize,setFonstSize]=useState("Font Size")
    const fontSizeList = [1, 2, 3, 4, 5, 6, 7];
    const handleFontSize=(e)=>{
setFonstSize(e.target.value);
document.execCommand("fontSize",false,e.target.value);
console.log(e.target.value);
    }
    return (
        <>

            <div className={style.sizeContainer}>
                <div className={style.container}>
                    <RemoveOutlinedIcon className={style.fontIcon} />
                </div>
                
                    <div className={style.fontList}>
                        <select id="fontSize" className={style.fontSelect} onChange={handleFontSize}>
                            <option className={style.size}>3</option>
                            {fontSizeList.map((x) => (
                                <option key={x} className={style.size}>{x}</option>
                            ))}
                        </select>
                    </div>
                
                <div>
                    <AddOutlinedIcon className={style.fontIcon} />
                </div>
            </div>
            <div >
                <Divider orientation="vertical" variant="middle" sx={{ height: "65%", gap: '0.2rem' }} />
            </div>


        </>
    )
}

export default FontSize;