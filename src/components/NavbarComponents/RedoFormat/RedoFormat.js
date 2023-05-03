import RedoIcon from '@mui/icons-material/Redo';

import style from '../UndoFormat/UndoFormat.module.css';

function RedoFormat() {
    

    return (
        <div className={style.undoContainer}
        // style={{
        //     ':hover::after': {
        //         content: '"Redo"',
        //         display: 'block',
        //         position: 'absolute',
        //         bottom: '-20px',
        //         left: '50%',
        //         transform: 'translateX(-50%)',
        //         padding: '5px',
        //         backgroundColor: 'black',
        //         color: 'white',
        //         borderRadius: '5px',
        //         fontSize: '12px'
        //     }
        // }}
        >
            
            <RedoIcon className={style.undoIcon} />
           
            
        </div>
    )
}

export default RedoFormat;
