import fontStyle from './FontStyle.module.css';
import Divider from '@mui/material/Divider';

function FontStyle() {
  const fontFamilyList = [
    "serif",
    "sans-serif",
    "monospace",
    "cursive",
    "fantasy",
    "system-ui",
    "ui-serif",
    "ui-sans-serif",
    "ui-monospace",
    "ui-rounded",
    "emoji",
    "math",
    "fangsong",
    "Georgia",
    "Times New Roman",
    "Impact",
  ];
  return (
    <>
      <div className={fontStyle.fontStyleBox}>
        <select
          className={fontStyle.fontStyle}
          id="fontStyle"
        >
          <option>serif</option>
          {fontFamilyList.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </div>
      <div >
        <Divider orientation="vertical" variant="middle" sx={{ height: "65%",gap:'0.2rem' }} />
      </div>
    </>
  )
}

export default FontStyle;